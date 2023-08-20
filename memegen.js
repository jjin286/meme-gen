const submit = document.querySelector('button[type="submit"]');
const topText = document.querySelector('#top-text');
const imgSrc = document.querySelector('#img-src');
const botText = document.querySelector('#bottom-text');
const previewTop = document.querySelector('#top-preview');
const previewImg = document.querySelector('.preview-img');
const previewBot = document.querySelector('#bot-preview');

submit.addEventListener('click', function(e){
  e.preventDefault();
  previewTop.innerText = topText.value;
})

topText.addEventListener('input', function(e){
  previewTop.innerText = e.target.value;
})

botText.addEventListener('input', function(e){
  previewBot.innerText = e.target.value;
})

imgSrc.addEventListener('input', function(e){
  previewImg.setAttribute("src", e.target.value);
})