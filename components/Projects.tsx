import React from 'react';
import Link from 'next/link';

import { Project } from '@/typings';
import ProjectCard from './ProjectCard';
import MoreCard from './more-card';
import MobileCarousel from './MobileCarousel';

import { Button } from '@/components/ui/button';

type Props = {
    projects: Project[];
};

const Projects = ({ projects }: Props) => {
    const displayProjects = projects?.slice(0, 5) || [];

    const carouselItems = [
        ...displayProjects.map((project) => (
            <ProjectCard key={project._id} project={project} />
        )),
        <Link key="more-projects" href="/projects" className="block h-full">
            <MoreCard type="projects" />
        </Link>,
    ];

    return (
        <div className="flex flex-col mb-16">
            <div className="group text-2xl md:text-3xl font-bold">
                <span className="group-hover:text-orange-400">My </span>
                <span className="text-orange-400 group-hover:text-inherit">
                    Projects
                </span>
            </div>

            <hr className="mt-2 border-2" />
            <div className="p-5">
                {/* Mobile Carousel */}
                <MobileCarousel>{carouselItems}</MobileCarousel>

                {/* Mobile CTA */}
                <Link
                    href="/projects"
                    className="md:hidden flex items-center justify-center mt-4 py-2.5 px-6 "
                >
                    <Button className="font-semibold border-2 hover:text-orange-400 hover:bg-inherit rounded-lg transition-colors">
                        View All Projects
                    </Button>
                </Link>

                {/* Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-3 gap-6">
                    {displayProjects.map((project) => (
                        <ProjectCard key={project._id} project={project} />
                    ))}
                    <Link href="/projects">
                        <MoreCard type="projects" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Projects;
