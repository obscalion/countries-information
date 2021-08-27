import 'regenerator-runtime';
import './styles/style.css';
import './script/components/nav-bar';
import ScrollReveal from 'scrollreveal';
import main from './script/view/main';

document.addEventListener('DOMContentLoaded', main);

ScrollReveal({ duration: 1000 });
ScrollReveal().reveal('.jumbotron', {
  distance: '150%',
  origin: 'bottom',
  opacity: null,
});
ScrollReveal().reveal('.searchCountry', { delay: 1500 });
ScrollReveal().reveal('.content', { delay: 2000 });
