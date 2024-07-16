const menuList = document.getElementById("menuList")
const menuIcon = document.getElementById("menuIcon")

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
} );

