document.getElementById("login-btn").addEventListener('click', ()=>{
    const emailValue = document.getElementById("email").value,
          passValue = document.getElementById("pass").value;
    
    if (emailValue == "user@mail.ru" && passValue == "12345678"){
        document.querySelector(".login").style = "display: none";
        document.querySelector(".add").style = "display: none"
    } else if (emailValue == "admin@mail.ru" && passValue == "12345678"){
        document.querySelector(".login").style = "display: none";
    }
})

document.querySelector('.reg').addEventListener('click', ()=>{
    document.querySelector('.l-block').classList.remove('shown');
    document.querySelector('.r-block').classList.add('shown');
})
document.querySelector('.log').addEventListener('click', ()=>{
    document.querySelector('.l-block').classList.add('shown');
    document.querySelector('.r-block').classList.remove('shown');
})

let tab = function(){
    let tabNav = document.querySelectorAll(".t-btn"),
        tabContent = document.querySelectorAll(".tab");
    
    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    })

    function selectTabNav(){
        tabNav.forEach(item => item.classList.remove('is-active'));
        this.classList.add('is-active');
        selectTabContent(this.getAttribute('data-t-name'))
    }

    function selectTabContent(name) {
        tabContent.forEach(item => {
            item.classList.contains(name)
            ? item.classList.add('shown')
            : item.classList.remove('shown')
        })
    }
}

let search = function(){
    let searchBlock = document.querySelector('.s-block'),
        searchBars = document.querySelectorAll('.s-block input');

    searchBars.forEach(item => {
        item.addEventListener('click', openSearch)
    })

    function openSearch(){
        searchBlock.style = 'padding-top: 20px';
        searchBars.forEach(item => item.nextElementSibling.classList.remove('o-s-res'));
        document.querySelector('#s-by-name + .s-res').nextElementSibling.classList.remove('o-s-res');
        this.nextElementSibling.classList.add('o-s-res')
    }

}

let posts = function(){
    let images = document.querySelectorAll('.post img');

    images.forEach(item => {
        item. addEventListener('click', openPost)
    })

    function openPost(){
        images.forEach(item => item.nextElementSibling.classList.remove('opened-text'));
        this.nextElementSibling.classList.add('opened-text')
    }
}

let openLink = function(){
    let links = document.querySelectorAll('#s-by-name + .s-res .res');
    links.forEach(item => {
        item.addEventListener('click',()=>{
            document.querySelector('#s-by-name + .s-res').classList.remove('o-s-res');
            document.querySelector('#s-by-name + .s-res').nextElementSibling.classList.add('o-s-res');
        })
    })
}

document.querySelector('#days').addEventListener('change', ()=>{
    if (document.querySelector('#days').value > 7) document.querySelector('#days').value = 7
    if (document.querySelector('#days').value < 1) document.querySelector('#days').value = 1
})


tab();

search();

posts();

openLink();


var map = L.map('map').setView([54, 45],15)
L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=jPGrXgKirPFiY3jPm9FD', {
    attribution: ''
}).addTo(map);

L.marker([54.186470, 45.174600]).addTo(map)
    .bindPopup('5 жизней')
    .openPopup();

L.marker([54.186624, 45.173523]).addTo(map)
    .bindPopup('100 одежек')
    .openPopup();