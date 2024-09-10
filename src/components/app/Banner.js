import React, { useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

function EmblaCarousel ()
{
  const [ emblaRef, emblaApi ] = useEmblaCarousel( { loop: true }, [ Autoplay( { delay: 3000 } ) ] )
  const [ selectedIndex, setSelectedIndex ] = useState( 0 )
  const [ slides, setSlides ] = useState( [] )

  // Theo dõi index của slide hiện tại
  const onSelect = () =>
  {
    if ( emblaApi )
    {
      setSelectedIndex( emblaApi.selectedScrollSnap() )
    }
  }

  useEffect( () =>
  {
    if ( emblaApi )
    {
      setSlides( emblaApi.scrollSnapList() ) // Lấy danh sách các slides
      emblaApi.on( 'select', onSelect ) // Gán sự kiện 'select' để theo dõi sự thay đổi
    }
  }, [ emblaApi ] )

  return (
    <div className=" w-12/12 h-500 overflow-hidden relative embla rounded-[20px] mt-10" ref={ emblaRef }>
      <div className="flex">
        <div className="min-w-full embla__slide">
          <img src="https://images.pexels.com/photos/383568/pexels-photo-383568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Slide 1" className="w-full"></img>
        </div>
        <div className="min-w-full embla__slide">
          <img src="https://images.pexels.com/photos/1209462/pexels-photo-1209462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Slide 2" className="w-full"></img>
        </div>
        <div className="min-w-full embla__slide">
          <img src="https://images.pexels.com/photos/1173651/pexels-photo-1173651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Slide 3" className="w-full"></img>
        </div>
      </div>
      {/* Hiển thị chấm tròn */ }
      <div className="absolute bottom-7 left-20 flex space-x-4">
        { slides.map( ( _, index ) => (
          <button
            key={ index }
            className={ `w-3 h-3 rounded-full ${ index === selectedIndex ? 'bg-white' : 'bg-gray-400' }` }
            onClick={ () => emblaApi.scrollTo( index ) }
          />
        ) ) }
      </div>
    </div>
  )
}

export default EmblaCarousel
