import React, { useState, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CloseIcon from "@mui/icons-material/Close";

function EmblaCarousel({ productData, selectedVariant }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  // State để quản lý modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const modalRef = useRef(null);

  useEffect(() => {
    if (productData) {
      // Tạo slides dựa trên biến thể đã chọn hoặc productData nếu không có biến thể nào
      const variantImages = selectedVariant
        ? selectedVariant.images // Sử dụng hình ảnh của biến thể nếu có
        : productData.images; // Nếu không có biến thể thì sử dụng hình ảnh gốc của sản phẩm

      const slidesData = [
        {
          id: 1,
          image: productData.primaryImage, 
          alt: "Primary Image",
          content: (
            <div className="banner-content">
              <h1>{productData.name}</h1>
              <h1 className="font-medium">{productData.discountPrice} USD</h1>
              <button className="banner-button flex items-center px-4 py-2 bg-black text-white rounded hover:bg-gray-200">
                <ShoppingCartIcon className="mr-2" /> Start Shopping
              </button>
            </div>
          ),
        },
        ...variantImages.map((img, index) => ({
          id: index + 2,
          image: img,
          alt: `Slide ${index + 2}`,
          content: null,
        })),
      ];
      setSlides(slidesData);
    }
  }, [productData, selectedVariant]);

  const onSelect = () => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  };

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", onSelect);
    }
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleOverlayClick);
    } else {
      document.removeEventListener("mousedown", handleOverlayClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOverlayClick);
    };
  }, [isModalOpen]);

  return (

<div className=" lg:w-full relative">
<div className="flex gap-5" >
   {/* Thumbnails */}
   <div className="flex flex-col justify-start  items-center mt-4 gap-5">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
              index === selectedIndex
                ? "ring-4 ring-blue-400 shadow-lg backdrop-blur-md"
                : "border-transparent"
            }`}
            onClick={() => emblaApi.scrollTo(index)}
          >
            <img
              src={slide.image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
      <div className="h-500 overflow-hidden relative embla rounded-[20px]" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-full embla__slide relative h-500">
              {slide.content && (
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-30 text-white">
                  {slide.content}
                </div>
              )}
              <img
                src={slide.image}
                alt={slide.alt}
                className="cursor-pointer w-full h-500 object-contain"
                onClick={() => openModal(slide.image)}
              />
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 h-9 w-9 left-2 transform -translate-y-1/2 bg-gray-300 text-black p-2 rounded-full opacity-50 hover:opacity-100 flex items-center justify-center"
          onClick={scrollPrev}
        >
          <ArrowBackIosIcon />
        </button>
        <button
          className="absolute top-1/2 h-9 w-9 right-2 transform -translate-y-1/2 bg-gray-300 text-black p-2 rounded-full opacity-50 hover:opacity-100 flex items-center justify-center"
          onClick={scrollNext}
        >
          <ArrowForwardIosIcon />
        </button>
        <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === selectedIndex ? "bg-white" : "bg-gray-400"}`}
              onClick={() => emblaApi.scrollTo(index)}
            />
          ))}
        </div>
      </div>


     
</div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative" ref={modalRef}>
            <button
              className="absolute top-2 right-2 text-white text-2xl focus:outline-none"
              onClick={closeModal}
            >
              <CloseIcon />
            </button>
            <img
              src={modalImage}
              alt="Enlarged Slide"
              className="max-w-full max-h-screen rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default EmblaCarousel;
