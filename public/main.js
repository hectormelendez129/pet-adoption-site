document.addEventListener('DOMContentLoaded', () => {

  function getIdFrom(element) {
    const li = element.closest('.message');
    return li ? li.dataset.id : null;
  }

  // --- THUMBS UP ---
  document.querySelectorAll('.thumb-up').forEach(btn => {
    btn.addEventListener('click', () => {
      const _id = getIdFrom(btn);
      if (!_id) return console.error('missing message id for thumbs up');

      fetch('/messages/thumbup', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id })
      })
      .then(res => res.json())
      .then(data => {
        const li = btn.closest('.message');
        li.querySelector('.thumb-count').textContent = data.thumbUp;
      })
      .catch(err => console.error('Thumbs up error:', err));
    });
  });

  // --- THUMBS DOWN ---
  document.querySelectorAll('.thumb-down').forEach(btn => {
    btn.addEventListener('click', () => {
      const _id = getIdFrom(btn);
      if (!_id) return console.error('missing message id for thumbs down');

      fetch('/messages/thumbdown', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id })
      })
      .then(res => res.json())
      .then(data => {
        const li = btn.closest('.message');
        li.querySelector('.thumb-count').textContent = data.thumbUp;
      })
      .catch(err => console.error('Thumbs down error:', err));
    });
  });

  // --- ADOPT ---
  document.querySelectorAll('.trash').forEach(btn => {
    btn.addEventListener('click', () => {
      const _id = getIdFrom(btn);
      if (!_id) return console.error('missing message id for adopt');

      fetch('/messages/adopt', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id })
      })
      .then(res => res.json())
      .then(data => {
        const li = btn.closest('.message');
        li.querySelector('.text').textContent = 'Adopted';
        btn.disabled = true;
        btn.textContent = 'Adopted';
      })
      .catch(err => console.error('Adopt error:', err));
    });
  });

  // --- FETCH RANDOM DOG IMAGE ---
  document.querySelectorAll('.message').forEach(li => {
    const imgEl = li.querySelector('.pet-image');
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          imgEl.src = data.message;
        } else {
          imgEl.alt = 'Failed to load image';
        }
      })
      .catch(err => {
        console.error('Dog image fetch error:', err);
        imgEl.alt = 'Failed to load image';
      });
  });

});
