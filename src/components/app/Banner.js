import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay( {delay: 3000} )])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img src="https://images.pexels.com/photos/383568/pexels-photo-383568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
        </div>
        <div className="embla__slide">
          <img src="https://images.pexels.com/photos/1209462/pexels-photo-1209462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>

        </div>
        <div className="embla__slide">
          <img src="https://images.pexels.com/photos/1173651/pexels-photo-1173651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img> 
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel;

