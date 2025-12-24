'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { cn } from '@/lib/utils';

const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about-me', label: 'About' },
    { id: 'my-experiance', label: 'Experience' },
    { id: 'my-skills', label: 'Skills' },
    { id: 'my-projects', label: 'Projects' },
    { id: 'my-blogs', label: 'Blogs' },
    { id: 'contact-me', label: 'Contact' },
];

const SectionIndicator = () => {
    const [activeSection, setActiveSection] = useState<string>('hero');
    const [isVisible, setIsVisible] = useState(false);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleScroll = useCallback(() => {
        // Show indicator while scrolling
        setIsVisible(true);

        // Clear existing timeout
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }

        // Hide after 1.5 seconds of no scrolling
        scrollTimeoutRef.current = setTimeout(() => {
            setIsVisible(false);
        }, 1500);

        // Determine active section
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i].id);
            if (section) {
                const offsetTop = section.offsetTop;
                if (scrollPosition >= offsetTop) {
                    setActiveSection(sections[i].id);
                    break;
                }
            }
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, [handleScroll]);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            className={cn(
                'fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3 transition-all duration-300',
                isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-4 pointer-events-none'
            )}
        >
            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="group flex items-center gap-2"
                    aria-label={`Go to ${section.label}`}
                >
                    {/* Label - shows on hover */}
                    <span
                        className={cn(
                            'text-xs font-medium px-2 py-1 rounded bg-background/80 backdrop-blur-sm border shadow-sm',
                            'opacity-0 group-hover:opacity-100 transition-opacity duration-200',
                            activeSection === section.id
                                ? 'text-primary border-primary/50'
                                : 'text-muted-foreground border-border'
                        )}
                    >
                        {section.label}
                    </span>

                    {/* Dot indicator */}
                    <span
                        className={cn(
                            'relative flex items-center justify-center transition-all duration-300',
                            activeSection === section.id
                                ? 'scale-100'
                                : 'scale-75 group-hover:scale-100'
                        )}
                    >
                        <span
                            className={cn(
                                'w-2.5 h-2.5 rounded-full transition-all duration-300',
                                activeSection === section.id
                                    ? 'bg-primary shadow-lg shadow-primary/50'
                                    : 'bg-muted-foreground/40 group-hover:bg-muted-foreground'
                            )}
                        />
                        {activeSection === section.id && (
                            <span className="absolute w-4 h-4 rounded-full border-2 border-primary/50 animate-ping" />
                        )}
                    </span>
                </button>
            ))}
        </div>
    );
};

export default SectionIndicator;
