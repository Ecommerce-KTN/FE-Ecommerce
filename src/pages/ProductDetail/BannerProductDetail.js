import React, { useState, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';

function EmblaCarousel() {
  // Dữ liệu cho các slide
  const slidesData = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/214487/pexels-photo-214487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Slide 1',
      content: (
        <div className='banner-content'>
          <h1>New Year Sale</h1>
          <h1>Offer 2024</h1>
          <h1 className='font-medium'>20% OFF</h1>
          <button className='banner-button flex items-center px-4 py-2 bg-black text-white rounded hover:bg-gray-700'>
            <ShoppingCartIcon className='mr-2' /> Start Shopping
          </button>
        </div>
      ),
    },
    {
      id: 2,
      image: 'https://m.media-amazon.com/images/I/71yelMyyFJL._AC_SL1500_.jpg',
      alt: 'Slide 2',
      content: null,
    },
    {
      id: 3,
      image: 'https://m.media-amazon.com/images/I/81cL-tAS2lL._AC_SL1500_.jpg',
      alt: 'Slide 3',
      content: null,
    },
    {
      id: 4,
      image: 'https://m.media-amazon.com/images/I/81adKrmxEVL._AC_SL1500_.jpg',
      alt: 'Slide 4',
      content: null,
    },
    {
      id: 5,
      image: 'https://m.media-amazon.com/images/I/61oxhHNYDXL._AC_SL1500_.jpg',
      alt: 'Slide 5',
      content: null,
    },
    {
      id: 6,
      image: 'https://m.media-amazon.com/images/I/61+f8OSF57L._AC_SL1500_.jpg',
      alt: 'Slide 6',
      content: null,
    },
    {
      id: 7,
      image: 'https://m.media-amazon.com/images/I/71dvviTgmnL._AC_SL1500_.jpg',
      alt: 'Slide 7',
      content: null,
    },
    {
      id: 8,
      image: 'https://m.media-amazon.com/images/I/61I14csKgXL._AC_SL1500_.jpg',
      alt: 'Slide 8',
      content: null,
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000 })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  // State để quản lý modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const modalRef = useRef(null);

  const onSelect = () => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  };

  useEffect(() => {
    if (emblaApi) {
      setSlides(emblaApi.scrollSnapList());
      emblaApi.on('select', onSelect);
    }
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  // Hàm để mở modal với hình ảnh được chọn
  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  // Hàm để đóng modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  // Hàm để đóng modal khi bấm ra ngoài hình ảnh
  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      // Thêm sự kiện click khi modal mở
      document.addEventListener('mousedown', handleOverlayClick);
    } else {
      // Loại bỏ sự kiện khi modal đóng
      document.removeEventListener('mousedown', handleOverlayClick);
    }

    // Cleanup khi component unmount
    return () => {
      document.removeEventListener('mousedown', handleOverlayClick);
    };
  }, [isModalOpen]);

  return (
    <div className='relative lg:w-full'>
      {/* Carousel */}
      <div
        className='h-500 overflow-hidden relative embla rounded-[20px]'
        ref={emblaRef}
      >
        <div className='flex'>
          {slidesData.map((slide) => (
            <div
              key={slide.id}
              className='min-w-full embla__slide relative'
            >
              {/* Nội dung banner nếu có */}
              {slide.content && (
                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-30 text-white'>
                  {slide.content}
                </div>
              )}
              {/* Hình ảnh */}
              <img
                src={slide.image}
                alt={slide.alt}
                className='cursor-pointer max-w-full max-h-screen'
                onClick={() => openModal(slide.image)}
              />
            </div>
          ))}
        </div>
        {/* Nút mũi tên trái */}
        <button
          className='absolute top-1/2 h-9 w-9 left-2 transform -translate-y-1/2 bg-gray-300 text-black p-2 rounded-full opacity-50 hover:opacity-100 flex items-center justify-center'
          onClick={scrollPrev}
        >
          <ArrowBackIosIcon />
        </button>
        {/* Nút mũi tên phải */}
        <button
          className='absolute top-1/2 h-9 w-9 right-2 transform -translate-y-1/2 bg-gray-300 text-black p-2 rounded-full opacity-50 hover:opacity-100 flex items-center justify-center'
          onClick={scrollNext}
        >
          <ArrowForwardIosIcon />
        </button>
        {/* Hiển thị chấm tròn */}
        <div className='absolute bottom-7 left-1/2 transform -translate-x-1/2 flex space-x-4'>
          {slidesData.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === selectedIndex ? 'bg-white' : 'bg-gray-400'
              }`}
              onClick={() => emblaApi.scrollTo(index)}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className='flex justify-center mt-4 space-x-2'>
        {slidesData.map((slide, index) => (
          <button
            key={slide.id}
            className={`w-16 h-16 border ${
              index === selectedIndex ? 'border-black' : 'border-transparent'
            } rounded overflow-hidden`}
            onClick={() => emblaApi.scrollTo(index)}
          >
            <img
              src={slide.image}
              alt={`Thumbnail ${index + 1}`}
              className='w-full h-full object-cover'
            />
          </button>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'>
          <div className='relative' ref={modalRef}>
            <button
              className='absolute top-2 right-2 text-white text-2xl focus:outline-none'
              onClick={closeModal}
            >
              <CloseIcon />
            </button>
            <img
              src={modalImage}
              alt='Enlarged Slide'
              className='max-w-full max-h-screen rounded'
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default EmblaCarousel;