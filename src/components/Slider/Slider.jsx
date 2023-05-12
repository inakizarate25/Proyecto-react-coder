import './slider.css'

const Slider = () => {
  var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = 'slide active';
}

    return (
        <div class="slider">
  <div class="slide">
    <img className='slider-img' src="https://i.ibb.co/qYbQhhr/1ac2b2e0-8927-11ec-bb4b-b8d31062c379.webp"/>
  </div>
  <div class="slide">
    <img className='slider-img' src="https://i.ibb.co/nkGW5DR/D53-UOXKNVNB2-JA3-JHSKEGDQCUE.jpg"/>
  </div>
  <div class="slide">
    <img className='slider-img' src="https://i.ibb.co/kJtXcZW/apple-watch-nike-edition-10.jpg"/>
  </div>
</div>
    )

}
export default Slider