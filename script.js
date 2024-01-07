
var menu_icon= document.querySelector(".ri-menu-fill");
var menu = document.getElementById("Responsive-nav");
var count=0;

menu_icon.addEventListener("click", () => {
    count++;
    if(count%2!=0) menu.style.display= 'block';
    else menu.style.display= 'none';
})

