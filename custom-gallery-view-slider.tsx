 // grid view first, and when a user clicks an image, it opens a modal with the Swiper slider 
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default function Gallery() {
  const images = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img7.jpg",
    "/img8.jpg",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openModal = (index) => {
    setStartIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Gallery Grid */}
      <h2 className="text-2xl text-white font-semibold mb-6">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Gallery ${idx + 1}`}
            className="cursor-pointer rounded-lg hover:opacity-80"
            onClick={() => openModal(idx)}
          />
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-2xl z-50"
          >
            ✕
          </button>
          <div className="w-full max-w-5xl">
            <Swiper
              modules={[Navigation]}
              navigation
              loop
              initialSlide={startIndex}
              className="overflow-hidden"
            >
              {images.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={src}
                    alt={`Slide ${idx + 1}`}
                    className="w-full h-[600px] object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
}
