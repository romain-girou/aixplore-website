// ===========================
// Aixplore — Script
// ===========================

(function () {
  'use strict';

  // --- Navigation scroll effect ---
  const nav = document.getElementById('nav');

  function onScroll() {
    if (window.scrollY > 20) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // --- Mobile menu toggle ---
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');

  toggle.addEventListener('click', function () {
    toggle.classList.toggle('nav__toggle--active');
    links.classList.toggle('nav__links--open');
  });

  // Close menu on link click
  links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      toggle.classList.remove('nav__toggle--active');
      links.classList.remove('nav__links--open');
    });
  });

  // --- Scroll animations ---
  var animatedElements = document.querySelectorAll(
    '.about__text, .value, .club-card, .gallery__item, .contact__form, .contact__info'
  );

  animatedElements.forEach(function (el) {
    el.classList.add('fade-in');
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in--visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  animatedElements.forEach(function (el) {
    observer.observe(el);
  });

  // --- Contact form (mailto) ---
  var form = document.getElementById('contact-form');

  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    if (!name || !email || !message) return;

    var subject = encodeURIComponent('Contact Aixplore — ' + name);
    var body = encodeURIComponent(
      'Nom : ' + name + '\nEmail : ' + email + '\n\nMessage :\n' + message
    );

    window.location.href =
      'mailto:aixplorerunningclub@gmail.com?subject=' + subject + '&body=' + body;
  });
})();
