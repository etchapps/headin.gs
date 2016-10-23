import pens from './pens';

const headings = document.querySelector('.headings');

pens.forEach((pen) => {
  const heading = document.createElement('iframe');
  heading.src = `https://codepen.io/${pen[0]}/embed/preview/${pen[1]}`;
  heading.frameborder = 0;
  heading.allowtransparency = true;
  heading.classList.add('heading');

  headings.appendChild(heading);
});
