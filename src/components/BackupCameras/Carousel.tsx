import {useState} from "react";

const images = [
    "/backup-cameras/carplaykit.jpg",
    "/backup-cameras/aftermarketradio.png",
    "/backup-cameras/backupcam.jpg",
];

export default function Carousel() {
    const [current, setCurrent] = useState(0);
    const total = images.length;

    const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);
    const goToSlide = (index: number) => setCurrent(index);

    return (
        <div className="relative w-11/12 lg:w-1/3 mt-4">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {images.map((src, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                            idx === current ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <img
                            src={src}
                            alt={`Slide ${idx + 1}`}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        />
                    </div>
                ))}
            </div>

            {/* Indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        className={`w-3 h-3 rounded-full ${
                            idx === current ? "bg-white" : "bg-white/50"
                        }`}
                        aria-label={`Slide ${idx + 1}`}
                    ></button>
                ))}
            </div>

            {/* Prev Button */}
            <button
                onClick={prevSlide}
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            >
        <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
          >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
            </button>

            {/* Next Button */}
            <button
                onClick={nextSlide}
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            >
        <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
          >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
            </button>
        </div>
    );
}
