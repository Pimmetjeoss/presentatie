'use client'

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
function SplineSceneBasic() {
  return (
    <Card className="w-full max-w-7xl h-[1000px] bg-black border-black relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
        </div>

        {/* Right content */}
        <div className="flex-6 relative flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full scale-110"
            />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default function Home() {
  const router = useRouter();
  const [showTopLeft, setShowTopLeft] = useState(true);
  const [showBottomRight, setShowBottomRight] = useState(false);
  const [showAgendaItems, setShowAgendaItems] = useState(false);

  const handleCardClick = () => {
    setShowTopLeft(false);
    setShowBottomRight(true);
  };

  const handleAgendaClick = () => {
    setShowBottomRight(false);
    setShowAgendaItems(true);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      {/* Text Card in top-left corner - clickable */}
      {showTopLeft && (
        <Card 
          className="absolute top-112 left-8 z-10 bg-black/80 border-black p-6 cursor-pointer transition-all hover:bg-black/90"
          onClick={handleCardClick}
        >
          <Image
            src="/Alju-Logistics-logo.svg"
            alt="Alju Logistics"
            width={300}
            height={100}
            className="object-contain"
          />
          <p className="mt-4 text-neutral-300 max-w-lg text-center">
                   Welkom bij de AI workshop!     
            
          </p>
        </Card>
      )}

      {/* Text Card in bottom-right corner - appears after click */}
      {showBottomRight && (
        <Card 
          className="absolute bottom-24 right-8 z-10 bg-black/80 border-black p-8 animate-in fade-in slide-in-from-bottom-5 duration-500 min-h-[120px] flex items-center cursor-pointer transition-all hover:bg-black/90"
          onClick={handleAgendaClick}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 whitespace-nowrap">
            Agenda van vandaag
          </h1>
        </Card>
      )}

      {/* Agenda items - appears after second click */}
      {showAgendaItems && (
        <Card className="absolute top-20 left-8 z-10 bg-black/80 border-black p-8 animate-in fade-in slide-in-from-left-5 duration-500">
          <div className="space-y-4">
            <p 
              className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 cursor-pointer hover:from-neutral-200 hover:to-neutral-500 transition-all"
              onClick={() => router.push('/llm')}
            >
              - Wat is een LLM?
            </p>
            <p className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">- Keywords</p>
            <p className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">- Nano Banana</p>
            <p className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">- MCP</p>
            <p className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">- AI coding assistents</p>
            <p className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">- Toekomst</p>
          </div>
        </Card>
      )}
      
      <SplineSceneBasic />
    </div>
  );
}