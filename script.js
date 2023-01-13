'use strict';

// _____________________ references____________________// 

//  modal element
const modal = document.querySelector('.modal'); 

//  overlay element
const overlay = document.querySelector('.overlay');

//  button close-modal element
const btnCloseModal = document.querySelector('.close-modal');

//  buttons show modal; for all 3 buttons
const btnsOpenModal = document.querySelectorAll('.show-modal'); 

// open modal function - open up modal when button is clicked:
const openModal = function() {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// close modal function - purpose for it to be executed once modal is clicked:
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


//--------------- modal button -----------------//

//   created for loop for each of the buttons
for(let i = 0; i < btnsOpenModal.length; i++) 

    //  when button is clicked it will open up the modal 
    btnsOpenModal[i].addEventListener('click', openModal); 
    
    //  refractor with openModal function above
    // function() {
    //     console.log('Button clicked');

    //     // when button modal is clicked* it will remove any class list that has 'hidden' in it
    //     modal.classList.remove('hidden');

    //     // once button is clicked the background gets 'hidden' aka blurred out
    //     overlay.classList.remove('hidden'); 
    // }); 

   // when clicked on the modal/content it will close
    btnCloseModal.addEventListener('click', closeModal);

    // when clicked outside of the modal/content it will close
    overlay.addEventListener('click', closeModal); 
     


