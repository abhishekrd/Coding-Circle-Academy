let menutoggle = document.querySelector('.menutoggle')
let navlist = document.querySelector('.navlist');
menutoggle.onclick = function(){
    menutoggle.classList.toggle('active');
    navlist.classList.toggle('active');
}

