//hamburgers are good, cant go wrong with a hamburger
const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
  };

  
    window.onload = () => {
      document.getElementById("hamburger").onclick = toggleNav;

  
    };
  //have a nice day