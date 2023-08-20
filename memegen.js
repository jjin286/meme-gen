const submit = document.querySelector('button[type="submit"]');
const topText = document.querySelector('#top-text');
const imgSrc = document.querySelector('#img-src');
const botText = document.querySelector('#bottom-text');
const previewTop = document.querySelector('#top-preview');
const previewImg = document.querySelector('.preview-img');
const previewBot = document.querySelector('#bot-preview');
const preview = document.querySelector('.preview');
const result = document.querySelector('.result');

submit.addEventListener('click', function(e){
  e.preventDefault();
  const generate = preview.cloneNode(true);
  generate.classList.add("meme");
  const trash = document.createElement('i');
  trash.className = "fa-regular fa-trash-can";
  generate.appendChild(trash);
  result.prepend(generate);
  topText.value = "";
  imgSrc.value = "";
  botText.value = "";
  previewTop.innerText = "TOP TEXT";
  previewBot.innerText = "BOT TEXT";
  previewImg.setAttribute("src", "https://www.peacemakersnetwork.org/wp-content/uploads/2019/09/placeholder.jpg");
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

result.addEventListener('click', function(e){
  if(e.target.className === 'fa-regular fa-trash-can'){
    e.target.parentElement.remove();
  }
})