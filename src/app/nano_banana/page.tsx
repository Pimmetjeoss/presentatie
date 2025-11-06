"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Timeline } from "./components/timeline";

// Image Grid component with overlay functionality
interface ImageGridProps {
  images: { src: string; alt: string }[];
  overlayImage: string;
  title: string;
}

function ImageGrid({ images, overlayImage, title, setShowVideoModal, setCurrentVideo }: ImageGridProps & { setShowVideoModal?: (show: boolean) => void, setCurrentVideo?: (video: string) => void }) {
  const [clickedImages, setClickedImages] = useState<Set<number>>(new Set());
  const [showOverlay, setShowOverlay] = useState(false);
  const [currentOverlayImage, setCurrentOverlayImage] = useState(overlayImage);

  // Define the visible and hidden image pairs for Prompts section
  const imagePairs = [
    { 
      visible: "/viool.jpg",
      hidden: "https://github.com/pixegami/nano-banana-prompt-guide/blob/main/src/output/realistic_image_1.png?raw=true",
      alt: "template 1"
    },
    { 
      visible: "/anime.jpg",
      hidden: "https://github.com/pixegami/nano-banana-prompt-guide/blob/main/src/output/illustration_1.png?raw=true",
      alt: "template 2"
    },
    { 
      visible: "/flesje.jpg",
      hidden: "https://github.com/pixegami/nano-banana-prompt-guide/blob/main/src/output/product_photo_3.png?raw=true",
      alt: "template 3"
    },
    { 
      visible: "/logo.jpg",
      hidden: "https://github.com/pixegami/nano-banana-prompt-guide/blob/main/src/output/logo_2.png?raw=true",
      alt: "template 4"
    },
  ];

  const handleImageClick = (index: number) => {
    const newClickedImages = new Set(clickedImages);
    if (newClickedImages.has(index)) {
      newClickedImages.delete(index);
    } else {
      newClickedImages.add(index);
    }
    setClickedImages(newClickedImages);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-4">
        {title === "Test" ? (
          // Special handling for Prompts section
          imagePairs.map((pair, index) => (
            <div key={index} className="relative">
              <Image
                src={clickedImages.has(index) ? pair.hidden : pair.visible}
                alt={pair.alt}
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] cursor-pointer hover:opacity-90 transition-all duration-300"
                onClick={() => handleImageClick(index)}
              />
              {clickedImages.has(index) && (
                <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                  Klik om te verbergen
                </div>
              )}
            </div>
          ))
        ) : (
          // Original behavior for other sections with overlay on 3rd image
          images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={500}
              height={500}
              className={`rounded-lg ${title === "Sarah" && index === 0 ? 'object-contain bg-gray-100' : 'object-cover'} ${title === "Sarah" && index === 0 ? 'h-32 md:h-64 lg:h-80' : 'h-20 md:h-44 lg:h-60'} w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] ${
                ((title === "Sarah" || title === "Stefan" || title === "Rowan") && index === 1) || (title !== "Sarah" && title !== "Stefan" && title !== "Rowan" && index === 2) || (title === "René" && (index === 0 || index === 1)) ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''
              }`}
              onClick={() => {
                // Special case for René section videos
                if (title === "René" && setShowVideoModal && setCurrentVideo) {
                  if (index === 0 && image.src === "/alfons.jpg") {
                    setCurrentOverlayImage("/Alfons_lederhosen.png");
                    setShowOverlay(true);
                  } else if (index === 1 && image.src === "/truckstaand.jpg") {
                    setCurrentVideo("/truck_alju.mp4");
                    setShowVideoModal(true);
                  } else if (index === 2 && image.src === "/alfons.jpg") {
                    setCurrentOverlayImage("/Alfons_fiets.png");
                    setShowOverlay(true);
                  }
                } else if (((title === "Sarah" || title === "Stefan" || title === "Rowan") && index === 1) || (title !== "Sarah" && title !== "Stefan" && title !== "Rowan" && index === 2)) {
                  setShowOverlay(true);
                }
              }}
            />
          ))
        )}
      </div>
      
      {/* Overlay for other sections */}
      {showOverlay && title !== "Test" && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setShowOverlay(false)}
        >
          <div className="relative max-w-5xl max-h-[90vh] p-8">
            <Image
              src={currentOverlayImage}
              alt={`${title} overlay`}
              width={1200}
              height={900}
              className="rounded-lg object-contain max-w-full max-h-[85vh] shadow-2xl"
            />
            <button
              className="absolute top-2 right-2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 text-black font-bold transition-all text-xl"
              onClick={(e) => {
                e.stopPropagation();
                setShowOverlay(false);
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function TimelineDemo() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  
  const handleReneClick = () => {
    window.location.href = '/mcp';
  };

  const data = [
    {
      title: "Prompts",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            
          </p>
          <ImageGrid 
            images={[]}
            overlayImage="https://assets.aceternity.com/templates/startup-4.webp"
            title="Test"
          />
        </div>
      ),
    },
    {
      title: "Aan de hand van beelden",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            
          </p>
          <ImageGrid 
            images={[
              { src: "/man.jpeg", alt: "mijzelf template" },
              { src: "/cap.jpeg", alt: "mijzelf template" },
              { src: "/soda.jpeg", alt: "mijzelf template" },
              { src: "/brown_jacket.jpeg", alt: "mijzelf template" }
            ]}
            overlayImage="/remixed_image_1757400081_0.png"
            title="mijzelf"
          />
        </div>
      ),
    },
    {
      title: "Producten",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            
          </p>
          <ImageGrid
            images={[
              { src: "/machine.jpg", alt: "Stefan template" },
              { src: "/truckalju.jpg", alt: "Stefan template" },
                      ]}
            overlayImage="/salar de uyuni.png"
            title="Stefan"
          />
        </div>
      ),
    },
    {
      title: "Barry",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">

          </p>
          <ImageGrid
            images={[
              { src: "/barry.jpeg", alt: "Sarah template" },
              { src: "/woodstock.jpg", alt: "Sarah template" },
            ]}
            overlayImage="/barry_woodstock.jpeg"
            title="Sarah"
          />
        </div>
      ),
    },
    {
      title: "Rowan",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">

          </p>
          <ImageGrid
            images={[
              { src: "/Rowan.jpg", alt: "Rowan template" },
              { src: "/priester.webp", alt: "Rowan template" },
            ]}
            overlayImage="/Rowan_heilig.png"
            title="Rowan"
          />
        </div>
      ),
    },
    {
      title: "Alfons",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">

          </p>
          <ImageGrid
            images={[
              { src: "/alfons.jpg", alt: "René template" },
              { src: "/truckstaand.jpg", alt: "René template" },
              { src: "/alfons.jpg", alt: "René template" }
            ]}
            overlayImage="/Alfons_fiets.png"
            title="René"
            setShowVideoModal={setShowVideoModal}
            setCurrentVideo={setCurrentVideo}
          />
        </div>
      ),
      onClick: handleReneClick,
    },
  ];
  return (
    <div className="min-h-screen w-full">
      <div className="absolute top-0 left-0 w-full">
        <Timeline data={data} />
      </div>
      
      {/* Video Modal */}
      {showVideoModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setShowVideoModal(false)}
        >
          <div className="relative max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-gray-300 transition-colors z-10"
            >
              ✕
            </button>
            <video
              controls
              autoPlay
              className="w-full rounded-lg shadow-2xl"
              onEnded={() => setShowVideoModal(false)}
            >
              <source src={currentVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
