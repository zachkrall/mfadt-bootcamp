var slideshowSpeed = 3000;

// Define Slides
var slides = document.getElementsByClassName('slide');

// Define Slideshow Container
var slidesContainer = document.getElementById('slideshow');

// Container for Indicators
var slidecounter = document.createElement('div');
slidecounter.id = 'slidecounter';
slidesContainer.appendChild(slidecounter);

// Create Indicators
var indicators = [];

for (let i=0; i<slides.length; i++){

  let newElm = document.createElement('div');
  newElm.classList.add('indicator');
  newElm.innerHTML = ' ';
  indicators.push(newElm);
  slidecounter.appendChild(newElm);

  // Bind click event to new indicator element
  newElm.onclick = function() {

    changeSlide(i);

    // reset timing
    clearInterval();

    // allow timer to play sibling
    // of selected slide
    counter = i;

  };

}

// Set first slide & indicator to active
indicators[0].classList.add('active');
slides[0].classList.add('active');

// Counter
var counter = 1;
setInterval( function(){

  changeSlide(counter);

  // reset counter if too long
  if(counter >= slides.length-1){
    counter = 0;
  } else {
    counter++;
  }

}, slideshowSpeed );

function changeSlide( position ){

  for ( var i=0; i<slides.length; i++ ){
    if( slides[i].classList.contains('active') ){
      slides[i].classList.remove('active');
      indicators[i].classList.remove('active');
    }
  }

  slides[position].classList.add('active');
  indicators[position].classList.add('active');

}
