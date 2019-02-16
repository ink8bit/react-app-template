document.addEventListener('DOMContentLoaded', () => {
  const lazyImages = [...document.querySelectorAll('.image_lazy')];

  if ('IntersectionObserver' in window) {
    const lazyImageObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          // lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove('image_lazy');
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(lazyImage => {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // It's better to use here a fallback for older browsers
  }
});
