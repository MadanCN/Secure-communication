function chooseFile(fileType) {
    document.getElementById('file-options').style.display = 'none';
    document.getElementById('encryption-form').style.display = 'block';  
  }
  
// To Create the Sticky header

const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    const scrollThreshold = 120;
    const scrollPosition = window.scrollY;

    if (scrollPosition > scrollThreshold) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

let menu =  document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};
