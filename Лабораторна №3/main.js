const cards = document.querySelectorAll('.card');

for (let i =0; i < cards.length; i++){
    const card = cards[i];
    card.addEventListener('mousemove', startrotate);
    card.addEventListener('mouseout', stoprotate);
}
    

function startrotate(event){
   const cardItem = this.querySelector('.card-item');
   
    const halfHeight = cardItem.offsetHeight / 2;
    const halfWidth = cardItem.offsetWidth / 2;
	
   cardItem.style.transform = 
   'rotateX('+-(event.offsetY - halfHeight)/10+'deg) rotateY('+(event.offsetX - halfWidth)/10+'deg)';
}


function stoprotate(event){
    const cardItem = this.querySelector('.card-item');
 
    cardItem.style.transform = 
    'rotate(0)';
 }