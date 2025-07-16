import "./styles.css";
console.log('hola :)');
console.log('hi');

const menu = document.querySelector('.menuCenter');
const infoModal = document.querySelector('#itemsInfo');

menu.addEventListener('click', (event)=>{
    if(event.target.closest(".itemName")){
        infoModal.showModal();
    }
});

infoModal.addEventListener('click', (event)=>{
    if(event.target.closest(".picCredits")){}
    else infoModal.close();
});