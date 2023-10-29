

document.addEventListener('DOMContentLoaded', () => {
  
    //===== MICRO-SLIDER begin
    const __ms = document.querySelector('.micro-slider');
    const __msSlider = new MicroSlider(__ms, { indicators: false, indicatorText: '' });
    const hammer = new Hammer(__ms);
    const __msTimer = 2000;
    let __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
  
    
    // Define an array of background colors corresponding to each image
    // const backgroundColors = [
    //   'lightblue', // Background color for the first image
    //   'lightgreen', // Background color for the second image
    //   'lightcoral', // Background color for the third image
    //   // Add more background colors for each image here
    // ];
  
    // Function to change the background color based on the current slide
    // function changeBackgroundColor(currentSlide) {
    //   const currentIndex = currentSlide ? currentSlide.index : 0;
    //   document.body.style.backgroundColor = backgroundColors[currentIndex];
    // }
  
    // Initial background color
    // changeBackgroundColor(__msSlider.current());
  
    // Event listener for micro-slider slide change
   
    
    //detect mouseenter event
      __ms.onmouseenter = function(e) {
      clearInterval(__msAutoplay); 
      console.log(e.type + ' mouse detected');
    }
    
    //detect mouseleave event
      __ms.onmouseleave = function(e) {
      clearInterval(__msAutoplay); 
      __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
      console.log(e.type + ' mouse detected');
    }
    
    //detect mouseclick event
      __ms.onclick = function(e) {
      clearInterval(__msAutoplay); 
      console.log(e.type + ' mouse detected');
    }
    
    //detect gesture tap event with hammer js library
    hammer.on('tap', function(e) {
      clearInterval(__msAutoplay);
      console.log(e.type + ' gesture detected');
    });
    
    //detect gesture swipe event with hammer js library
    hammer.on('swipe', function(e) {
      clearInterval(__msAutoplay); 
      __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
      console.log(e.type + ' gesture detected');
    });
  
    let slideLink = document.querySelectorAll('.slider-item');
    if (slideLink && slideLink !== null && slideLink.length > 0){
      slideLink.forEach( el => el.addEventListener('click', e => {
        e.preventDefault();
        let href = el.dataset.href;
        let target = el.dataset.target;
        if (href !== '#') window.open(href, target);
      }));
    }
    
    //===== MICRO-SLIDER end
    
  });