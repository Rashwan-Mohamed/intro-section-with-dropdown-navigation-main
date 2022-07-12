let features = document.querySelectorAll('.Features');
let company = document.querySelectorAll('.Company');
let empty = document.querySelector('.empty');
let empty1 = document.querySelector('.empty-2');
let down = document.querySelector('.down');
let dawn = document.querySelector('.dawn');
let menu = document.querySelector('.mmenu');
let toggle = document.querySelector('.toggle');




features.forEach((item) => {

    item.addEventListener('click', (e) => {



        e.currentTarget.nextElementSibling.classList.toggle('unvisible');
        console.log(e.currentTarget.querySelector('.down'));
        e.currentTarget.querySelector('.down').classList.toggle('toy');


    })


});
company.forEach((item) => {

    item.addEventListener('click', (e) => {



        e.currentTarget.nextElementSibling.classList.toggle('unvisible');
        e.currentTarget.querySelector('.dawn').classList.toggle('toy');
        console.log(e.currentTarget.nextElementSibling);



    })



});






menu.addEventListener('click', () => {

    menu.classList.toggle('open');
    toggle.classList.toggle('disable');

});


window.addEventListener('resize', () => {

    console.log();
    if (screen.width > 505) {
        toggle.classList.add('disable');
    }
});