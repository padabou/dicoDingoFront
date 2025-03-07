"use client";
import React, { useState, useEffect } from 'react';

const Carousel = ({ images, autoSlide = true, autoSlideInterval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (autoSlide) {
            const slideInterval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, autoSlideInterval);
            return () => clearInterval(slideInterval);
        }
    }, [autoSlide, autoSlideInterval, images.length]);


    return (
        <div className="relative w-full mx-auto">
            <div className="overflow-hidden relative h-96">
                {images?.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-transform w-full h-full transform  ${index} ${
                            index === currentIndex ? 'duration-3000 translate-x-0' : index === (currentIndex - 1) || (index === images.length - 1 && currentIndex === 0)? 'duration-3000 -translate-x-full' : 'opacity-0 translate-x-full'
                        }`}

                    >
                        <img src={`${process.env.NEXT_PUBLIC_PICTURE_PATH}${image.url}`} alt={image.alt} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;