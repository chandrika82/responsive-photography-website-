const textButtons = document.
querySelectorAll('.contact___btn'); 
textButtons.forEach(textButton => {
    let text= textButton.querySelector('p');
   text.innerHTML= text.innerHTML.split('').map((character, index) =>`<span style="transform:rotate(${index * 12 }deg)">${character}</span>`).join('')
})