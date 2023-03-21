function navToggle() {
	var links = document.getElementById('navUl');
	links.classList.toggle("_active");
}

$('.owl-carousel').owlCarousel({
    items:4,
    lazyLoad:true,
    loop:true,
    margin:10
});


// footer toggle

function aboutToggle() {
    var footerAbout = document.getElementById("footerAbout");
    footerAbout.classList.toggle("db");
}


function helpToggle() {
    var footerHelp = document.getElementById("footerHelp");
    footerHelp.classList.toggle("db");
}

function accountToggle() {
    var footerAccount = document.getElementById("footerAccount");
    footerAccount.classList.toggle("db");
}

function contactsToggle() {
    var footerContacts = document.getElementById("footerContacts");
    footerContacts.classList.toggle("db");
}




var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "img/sun.png";
    }else{
        icon.src = "img/moon.png";
    }
}