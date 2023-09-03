function replaceElementWithImage() {
    const originalElement = document.querySelector('a[aria-label="X"]');
    if (originalElement) {
      const imageElement = document.createElement('img');
      imageElement.src = 'https://raw.githubusercontent.com/Prexry/BirdX/main/icons/logo.svg';
      imageElement.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = 'https://twitter.com/home';
      });
      originalElement.parentNode.replaceChild(imageElement, originalElement);
    }
  }
  replaceElementWithImage();
  setInterval(replaceElementWithImage, 50);
  