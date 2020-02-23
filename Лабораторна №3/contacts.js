const cards = document.querySelectorAll('.card');

for (let i =0; i < cards.length; i++){
    const card = cards[i];
    card.addEventListener('mousemove', startrotate);
    card.addEventListener('mouseout', stoprotate);
}
    

function startrotate(event){
   const cardItemtg = this.querySelector('.card-itemtg');
	const halfHeighttg = cardItemtg.offsetHeight / 2;
    const halfWidthtg = cardItemtg.offsetWidth / 2;
   cardItemtg.style.transform = 
   'rotateX('+-(event.offsetY - halfHeighttg)/10+'deg) rotateY('+(event.offsetX - halfWidthtg)/10+'deg)';
}


function stoprotate(event){
	const cardItem = this.querySelector('.card-itemtg');
 
	cardItem.style.transform = 
    'rotate(0)';
 }