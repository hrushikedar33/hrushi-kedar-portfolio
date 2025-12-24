'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';

type Props = {
    children: React.ReactNode[];
    className?: string;
};

const MobileCarousel = ({ children, className }: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const totalItems = children.length;

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % totalItems);
    };

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
    };

    // Swipe handling
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            goToNext();
        } else if (isRightSwipe) {
            goToPrev();
        }
    };

    return (
        <div className={cn('md:hidden', className)}>
            {/* Carousel container */}
            <div
                ref={containerRef}
                className="relative overflow-hidden"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                <div
                    className="flex transition-transform duration-300 ease-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {children.map((child, index) => (
                        <div key={index} className="w-full flex-shrink-0 px-1">
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center items-center gap-2 mt-4">
                <button
                    onClick={goToPrev}
                    className="p-1 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                    aria-label="Previous"
                >
                    <ChevronLeftIcon className="w-4 h-4" />
                </button>

                <div className="flex gap-1.5">
                    {children.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={cn(
                                'w-2 h-2 rounded-full transition-all duration-300',
                                currentIndex === index
                                    ? 'bg-orange-400 w-4'
                                    : 'bg-muted-foreground/40 hover:bg-muted-foreground'
                            )}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={goToNext}
                    className="p-1 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                    aria-label="Next"
                >
                    <ChevronRightIcon className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default MobileCarousel;
