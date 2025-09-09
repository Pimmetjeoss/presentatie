"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-slate-950 dark:text-white"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Background Paths",
}: {
    title?: string;
}) {
    const words = title.split(" ");
    
    const agendaItems = [
        "- Wat is een LLM",
        "- Keywords", 
        "- Nano Banana",
        "- MCP",
        "- AI coding assistents",
        "- Toekomst"
    ];

    const renderAnimatedText = (text: string, baseDelay: number) => (
        text.split("").map((letter, letterIndex) => (
            <motion.span
                key={letterIndex}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    delay: baseDelay + letterIndex * 0.03,
                    type: "spring",
                    stiffness: 150,
                    damping: 25,
                }}
                className="inline-block text-transparent bg-clip-text 
                bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                dark:from-white dark:to-white/80"
            >
                {letter === " " ? "\u00A0" : letter}
            </motion.span>
        ))
    );

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-neutral-950">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 pr-0 pt-32 flex justify-end">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="text-right"
                >
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tight pr-16">
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block mr-4 last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay:
                                                wordIndex * 0.1 +
                                                letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className="inline-block text-transparent bg-clip-text 
                                        bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                                        dark:from-white dark:to-white/80"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>
                    
                    <motion.h2 
                        className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tight text-right pr-16"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        {"Agenda".split("").map((letter, letterIndex) => (
                            <motion.span
                                key={letterIndex}
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    delay: 1.2 + letterIndex * 0.03,
                                    type: "spring",
                                    stiffness: 150,
                                    damping: 25,
                                }}
                                className="inline-block text-transparent bg-clip-text 
                                bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                                dark:from-white dark:to-white/80"
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </motion.h2>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="mt-8"
                    >
                        <ul className="space-y-3 text-3xl font-bold tracking-tight pr-16">
                            {agendaItems.map((item, itemIndex) => (
                                <motion.li 
                                    key={itemIndex}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 2 + itemIndex * 0.2, duration: 0.6 }}
                                >
                                    {renderAnimatedText(item, 2 + itemIndex * 0.2)}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                </motion.div>
            </div>
        </div>
    );
}