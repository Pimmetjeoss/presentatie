'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import Lenis from 'lenis'
import {ZoomParallax} from "@/app/ai-coding/components/zoom-parallax";
import {ContainerScroll} from "@/app/ai-coding/components/container-scroll-animation";
import Image from 'next/image';
import Link from 'next/link';

export default function DefaultDemo() {

	React.useEffect( () => {
        const lenis = new Lenis()
       
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    },[])


	const images = [
		{
			src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
			alt: 'Modern architecture building',
		},
		{
			src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
			alt: 'Urban cityscape at sunset',
		},
		{
			src: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
			alt: 'Abstract geometric pattern',
		},
		{
			src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
			alt: 'Mountain landscape',
		},
		{
			src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
			alt: 'Minimalist design elements',
		},
		{
			src: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
			alt: 'Ocean waves and beach',
		},
		{
			src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
			alt: 'Forest trees and sunlight',
		},
	];

	return (
		<main className="min-h-screen w-full">
			<div className="flex flex-col overflow-hidden pb-[200px] pt-[300px]">
				<ContainerScroll
					titleComponent={
						<>
							<h1 className="text-6xl md:text-7xl font-semibold text-black dark:text-white">
								Unleash the power of <br />
								<span className="text-6xl md:text-[8rem] font-bold mt-1 leading-none">
									AI CODING ASSISTENTS
								</span>
							</h1>
						</>
					}
				>
					<Image
						src="https://assets.apidog.com/blog-next/2025/06/image-177.png"
						alt="hero"
						height={720}
						width={1400}
						className="mx-auto rounded-2xl object-cover h-full w-full object-center"
						draggable={false}
					/>
				</ContainerScroll>
			</div>
			<Link href="/toekomst" className="block cursor-pointer">
				<div className="relative flex h-[30vh] items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
					<h2 className="text-center text-3xl font-bold hover:text-blue-500 transition-colors">
						Click to Continue →
					</h2>
				</div>
				<ZoomParallax images={images} />
			</Link>
		</main>
	);
}
