"use client";
import TabSwitcher from "@/components/TabSwitcher";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Slide {
  id: number;
  content: string;
  imageUrl: string;
  mediaUrl: string;
  type: "image" | "video";
}

interface CarouselProps {
  slides: Slide[];
  interval?: number; // Optional auto-slide interval in milliseconds
  visibleSlides?: number;
}

const slides: Slide[] = [
  {
    id: 1,
    content: "First Slide",
    imageUrl: "",
    mediaUrl: "/bg.jpg",
    type: "image",
  },
  {
    id: 2,
    content: "Second Slide",
    imageUrl: "",
    mediaUrl: "/bg.jpg",
    type: "image",
  },
  {
    id: 3,
    content: "Third Slide",
    imageUrl: "",
    mediaUrl: "/bg.jpg",
    type: "image",
  },
  {
    id: 4,
    content: "First Slide",
    imageUrl: "",
    mediaUrl: "/video.mp4",
    type: "video",
  },
  {
    id: 5,
    content: "Second Slide",
    imageUrl: "",
    mediaUrl: "/video1.mp4",
    type: "video",
  },
  {
    id: 6,
    content: "Third Slide",
    imageUrl: "",
    mediaUrl: "/video2.mp4",
    type: "video",
  },
];

const ImgCrousel: React.FC<CarouselProps> = ({ slides, interval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, interval);

    return () => clearInterval(slideInterval);
  }, [slides.length, interval]);

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="relative w-full  mx-auto overflow-hidden">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full flex justify-center items-center h-[75vh] relative"
          >
            {slide.type === "image" ? (
              <Image
                src={slide.mediaUrl}
                alt={`Slide ${slide.id}`}
                fill
                className="object-cover rounded-lg"
              />
            ) : (
              <video
                src={slide.mediaUrl}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover rounded-lg"
              />
            )}
            <div className="absolute flex justify-center bg-black bg-opacity-50 text-white p-4 w-full">
              <p className="text-3xl">{slide.content}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <button
         onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        Prev
      </button>
      <button
         onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        Next
      </button> */}
      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

const CardCarousel: React.FC<CarouselProps> = ({ slides, interval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 3 ? 0 : prevSlide + 3
      );
    }, interval);

    return () => clearInterval(slideInterval);
  }, [slides.length, interval]);

  // const goToSlide = (slideIndex: number) => {
  //   setCurrentSlide(slideIndex);
  // };

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-[33.333%]  flex justify-center items-center h-[75vh] relative"
            >  {/* adjust height/width here */}
            {slide.type === "image" ? (
              <Image
                src={slide.mediaUrl}
                alt={`Slide ${slide.id}`}
                fill
                className="object-cover rounded-lg"
              />
            ) : (
              <video
                src={slide.mediaUrl}
                autoPlay
                muted
                loop
                className="object-cover rounded-lg"
              />
            )}
            <div className="absolute flex justify-center bg-black bg-opacity-50 text-white p-4 w-full">
              <p className="text-3xl">{slide.content}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
        }
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        Prev
      </button>
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
        }
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        Next
      </button>
      {/* Indicators */}
      {/* <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div> */}
    </div>
  );
};

const image = `"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Slide {
  id: number;
  content: string;
  imageUrl: string;
}

interface CarouselProps {
  slides: Slide[];
  interval?: number; // Optional auto-slide interval in milliseconds
}

const Carousel: React.FC<CarouselProps> = ({ slides, interval = 3000 }) => { //edit time here
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, interval);

    return () => clearInterval(slideInterval);
  }, [slides.length, interval]);

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
   <div className="relative w-full  mx-auto overflow-hidden">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: translateX(-{currentSlide * 100}%) }} //add backtik and dollar sign
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full flex justify-center items-center h-[75vh] relative"
          >
             {slide.type === "image" ? (
                <Image
                  src={slide.mediaUrl}
                  alt={Slide {slide.id}} //add backtik and dollar sign
                  fill
                  className="object-cover rounded-lg"
                />
              ) : (
                <video
                  src={slide.mediaUrl}
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover rounded-lg"
                />
              )}
            <div className="absolute flex justify-center bg-black bg-opacity-50 text-white p-4 w-full">
              <p className="text-3xl">{slide.content}</p>
            </div>
          </div>
        ))}
      </div>
         {/* <button
         onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        Prev
      </button>
      <button
         onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        Next
      </button> */}
      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={w-3 h-3 rounded-full {
              currentSlide === index ? "bg-white" : "bg-gray-500"
            }} //add backtik and dollar sign
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
`;
const CardCarouselCode = `"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Slide {
  id: number;
  content: string;
  imageUrl: string;
}

interface CarouselProps {
  slides: Slide[];
  interval?: number; // Optional auto-slide interval in milliseconds
}

const Carousel: React.FC<CarouselProps> = ({ slides, interval = 3000 }) => { //edit time here
 const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 3 ? 0 : prevSlide + 3
      );
    }, interval);

    return () => clearInterval(slideInterval);
  }, [slides.length, interval]);

  // const goToSlide = (slideIndex: number) => {
  //   setCurrentSlide(slideIndex);
  // };

   return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: translateX(-{currentSlide * (100 / 3)}%) }} //add backtik and dollar sign
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-[33.333%] flex justify-center items-center h-[75vh] relative"
          >
            {slide.type === "image" ? (
              <Image
                src={slide.mediaUrl}
                alt={Slide {slide.id}} //add backtik and dollar sign
                fill
                className="object-cover rounded-lg"
              />
            ) : (
              <video
                src={slide.mediaUrl}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover rounded-lg"
              />
            )}
            <div className="absolute flex justify-center bg-black bg-opacity-50 text-white p-4 w-full">
              <p className="text-3xl">{slide.content}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
        }
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        Prev
      </button>
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
        }
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        Next
      </button>
      {/* Indicators */}
      {/* <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={w-3 h-3 rounded-full {
              currentSlide === index ? "bg-white" : "bg-gray-500"
            }} //add backtik and dollar sign
            onClick={() => goToSlide(index)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;
`;
const cerousel = () => {
  return (
    <div>
      <div>
        <p className="text-xl font-bold text-white mb-3">
          1. Simple Cerousel with Images&Video Example
        </p>
        <TabSwitcher
          language="tsx"
          codeString={image}
          previewComponent={<ImgCrousel slides={slides} interval={3000} />}
          description={<></>}
        />
      </div>
      <div>
        <p className="mt-5 text-xl font-bold text-white mb-3">
          2. Cerousel with small cards
        </p>
        <TabSwitcher
          language="tsx"
          codeString={CardCarouselCode}
          previewComponent={<CardCarousel slides={slides} interval={3000} />}
          description={<></>}
        />
      </div>
    </div>
  );
};

export default cerousel;
