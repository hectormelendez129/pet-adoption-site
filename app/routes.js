const ObjectId = require('mongodb').ObjectId;

module.exports = function (app, passport, db) {

  // ===========================
  // HOME PAGE
  // ===========================
  app.get('/', function (req, res) {
    res.render('index.ejs');
  });

  // ===========================
  // PROFILE PAGE
  // ===========================
  app.get('/profile', isLoggedIn, function (req, res) {
    db.collection('messages').find().toArray((err, result) => {
      if (err) return console.log(err);
      res.render('profile.ejs', {
        user: req.user,
        messages: result
      });
    });
  });

  // ===========================
  // LOGOUT
  // ===========================
  app.get('/logout', function (req, res) {
    req.logout(() => {
      console.log('User has logged out!');
    });
    res.redirect('/');
  });

  // ===========================
  // MESSAGE BOARD ROUTES
  // ===========================

  // POST a new message
  app.post('/messages', (req, res) => {
    db.collection('messages').insertOne({
      name: req.body.name,
      petName: req.body.petName,
      bio: req.body.bio,
      msg: req.body.msg,
      thumbUp: 0,
      thumbDown: 0
    }, (err, result) => {
      if (err) return console.log(err);
      console.log('Saved to database');
      res.redirect('/profile');
    });
  });
app.post('/messages', async (req, res) => {
  try {
    // Fetch a random dog image once
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    const imageUrl = data.status === 'success' ? data.message : '';

    db.collection('messages').insertOne({
      name: req.body.name,
      petName: req.body.petName,
      bio: req.body.bio,
      msg: req.body.msg,
      thumbUp: 0,
      thumbDown: 0,
      image: imageUrl // <-- store the dog image in DB
    }, (err, result) => {
      if (err) return console.log(err);
      console.log('Saved to database with dog image');
      res.redirect('/profile');
    });
  } catch (err) {
    console.error('Error fetching dog image:', err);
    res.redirect('/profile');
  }
});

  // ===========================
  // THUMBS UP
  // ===========================
  app.put('/messages/thumbup', (req, res) => {
    if (!req.body._id) return res.status(400).send('Missing _id');
    db.collection('messages').findOneAndUpdate(
      { _id: new ObjectId(req.body._id) },
      { $inc: { thumbUp: 1 } },
      { returnDocument: 'after' },
      (err, result) => {
        if (err) return res.status(500).send(err);
        res.json(result.value);
      }
    );
  });

  // ===========================
  // THUMBS DOWN (DECREMENT)
  // ===========================
  app.put('/messages/thumbdown', (req, res) => {
    if (!req.body._id) return res.status(400).send('Missing _id');
    db.collection('messages').findOneAndUpdate(
      { _id: new ObjectId(req.body._id) },
      { $inc: { thumbUp: -1 } },
      { returnDocument: 'after' },
      (err, result) => {
        if (err) return res.status(500).send(err);
        res.json(result.value);
      }
    );
  });
// ADOPT PET
app.put('/messages/adopt', (req, res) => {
  if (!req.body._id) return res.status(400).send('Missing _id');
  db.collection('messages').findOneAndUpdate(
    { _id: new ObjectId(req.body._id) },
    { $set: { msg: 'Adopted' } }, // update description
    { returnDocument: 'after' },
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json(result.value);
    }
  );
});

  // ===========================
  // DELETE MESSAGE
  // ===========================
  app.delete('/messages', (req, res) => {
    if (!req.body._id) return res.status(400).send('Missing _id');
    db.collection('messages').findOneAndDelete(
      { _id: new ObjectId(req.body._id) },
      (err, result) => {
        if (err) return res.status(500).send(err);
        res.send('Message deleted!');
      }
    );
  });

  // ===========================
  // AUTHENTICATION ROUTES
  // ===========================

  // LOGIN
  app.get('/login', function (req, res) {
    res.render('login.ejs', { message: req.flash('loginMessage') });
  });

  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
  }));

  // SIGNUP
  app.get('/signup', function (req, res) {
    res.render('signup.ejs', { message: req.flash('signupMessage') });
  });

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
  }));

  // ===========================
  // UNLINK LOCAL ACCOUNT
  // ===========================
  app.get('/unlink/local', isLoggedIn, function (req, res) {
    var user = req.user;
    user.local.email = undefined;
    user.local.password = undefined;
    user.save(function (err) {
      res.redirect('/profile');
    });
  });

};

// ===========================
// MIDDLEWARE: CHECK LOGIN
// ===========================
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/');
}
