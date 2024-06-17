function myFunction() {
    let x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }
  function cont(){
let y = document.getElementById("contact")
if (y.style.display === "none") {
    y.style.display = "flex";
  } else {
    y.style.display = "none";
  }
    }
 function cont1(){
    let z = document.getElementById("programming")
     if (z.style.display === "flex") {
        z.style.display = "none";
      } else {
        z.style.display = "flex";
      }
        }
        function cont2(){
            let z = document.getElementById("države")
             if (z.style.display === "flex") {
                z.style.display = "none";
              } else {
                z.style.display = "flex";
              }
                }
function myFunction1() {
  document.getElementById("myLinks").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.icon')) {
    let dropdowns = document.getElementsByClassName("topnav");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}