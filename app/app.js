window.addEventListener('scroll', () => {
    // top section area 
    let topSection = document.querySelector('.a');
    // scroll section area 
    let scroll = document.querySelector('.scroll_handler');
    // moving indicator 
    let indicator = document.getElementById('indicator')

    // if we reach our target section, then calculate total section scroll Y exist percentance
    if(topSection.offsetHeight < window.pageYOffset){
        // calculate percentage  //scrollY//
        const percentage = (((window.pageYOffset - topSection.offsetHeight) / scroll.offsetHeight) * 100)

        // and setAttribute with dynamic code 
        percentage <= 100 && indicator.setAttribute("style", `will-change: transform; transform: translate3d(0px, ${percentage * 2}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;`);
    }
  });