// Simple scroll reveal: elements with [data-reveal] will get the 'animate-fade-up' class
(function () {
  function reveal() {
    const opts = { threshold: 0.1 };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.getAttribute('data-delay') || '0';
          el.style.animationDelay = delay + 'ms';
          el.classList.add('animate-fade-up');
          io.unobserve(el);
        }
      });
    }, opts);

    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', reveal);
  } else {
    reveal();
  }
})();
