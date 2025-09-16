'use client';
import React from 'react';
import Lenis from 'lenis'
import {ZoomParallax} from "@/app/ai-coding/components/zoom-parallax";
import {ContainerScroll} from "@/app/ai-coding/components/container-scroll-animation";
import { TestimonialCarousel } from "./components/profile-card-testimonial-carousel";
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
			src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QUklMjBhZ2VudHxlbnwwfHwwfHx8MA%3D%3D',
			alt: 'Modern architecture building',
		},
		{
			src: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtZXxlbnwwfHwwfHx8MA%3D%3D',
			alt: 'Urban cityscape at sunset',
		},
		{
			src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGFzaGJvYXJkfGVufDB8fDB8fHww',
			alt: 'Abstract geometric pattern',
		},
		{
			src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwbGljYXRpb258ZW58MHx8MHx8fDA%3D',
			alt: 'Mountain landscape',
		},
		{
			src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWV8ZW58MHx8MHx8fDA%3D',
			alt: 'Minimalist design elements',
		},
		{
			src: 'https://cdn.prod.website-files.com/67053868fc01e494462e71c9/67daad2ef3660093645d72ac_model-context-protocol-mcp-ai.jpg',
			alt: 'Ocean waves and beach',
		},
		{
			src: 'https://www.b-a-w.com/wp-content/uploads/2022/10/4-1.jpg',
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
			
			{/* Testimonial Carousel Section */}
			<div className="py-20">
				<TestimonialCarousel />
			</div>
			
			<div className="mt-[32rem] mb-20">
				<ZoomParallax images={images} />
			</div>
			
			<Link href="/toekomst" className="block cursor-pointer">
				<div className="relative flex h-[30vh] items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
					<h2 className="text-center text-3xl font-bold hover:text-blue-500 transition-colors">
						Click to Continue →
					</h2>
				</div>
			</Link>
		</main>
	);
}
