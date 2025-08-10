// anul curent
document.getElementById('y')?.textContent = new Date().getFullYear();

// SLIDER
const slidesWrap = document.querySelector('.slides');
const dotsWrap = document.querySelector('.dots');

// imagini stock (le poți înlocui cu ale tale)
const images = [
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop'
];

slidesWrap.innerHTML = images.map(src => `<div class="slide" style="background-image:url('${src}')"></div>`).join('');
let index = 0;
const total = images.length;

function updateSlider(){
  slidesWrap.style.transform = `translateX(-${index*100}%)`;
  [...dotsWrap.children].forEach((d,i)=>d.classList.toggle('active', i===index));
}
function go(step){ index = (index + step + total) % total; updateSlider(); }

document.querySelector('.prev').addEventListener('click', ()=>go(-1));
document.querySelector('.next').addEventListener('click', ()=>go(1));

dotsWrap.innerHTML = images.map((_,i)=>`<button class="dot" aria-label="Slide ${i+1}"></button>`).join('');
[...dotsWrap.children].forEach((d,i)=>d.addEventListener('click', ()=>{ index=i; updateSlider(); }));
updateSlider();
setInterval(()=>go(1), 6000); // auto-rotate

// TABURI
const tabText = {
  design: `<p><strong>Design & Front-end:</strong> UI/UX curat, HTML/CSS/JS, accesibilitate, performanță ridicată (LCP &lt; 2.5s).</p>`,
  landing: `<p><strong>Landing Pages:</strong> structură clară, headline-uri puternice, CTA-uri vizibile și elemente de încredere (testimoniale, FAQ).</p>`,
  mkt: `<p><strong>Marketing & Analytics:</strong> Google Ads (basic), tag-uri și evenimente GA4, SEO on-page, rapoarte simple.</p>`
};
const tabs = document.querySelectorAll('.tab');
const tabContent = document.getElementById('tab-content');
tabContent.innerHTML = tabText.design;

tabs.forEach(t=>t.addEventListener('click', ()=>{
  tabs.forEach(x=>x.classList.remove('active'));
  t.classList.add('active');
  tabContent.innerHTML = tabText[t.dataset.key];
}));
