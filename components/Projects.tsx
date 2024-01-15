import React from 'react';
import Link from 'next/link';

import { Project } from '@/typings';
import ProjectCard from './ProjectCard';
import MoreCard from './more-card';

type Props = {
    projects: Project[];
};

const Projects = ({ projects }: Props) => {
    return (
        <div className="flex flex-col mb-16">
            <div className="group text-2xl md:text-3xl font-bold">
                <span className="group-hover:text-orange-400">My </span>
                <span className="text-orange-400 group-hover:text-inherit">
                    Projects
                </span>
            </div>

            <hr className="mt-2 border-2" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5">
                {projects?.slice(0, 5).map((project) => (
                    <ProjectCard key={project._id} project={project} />
                ))}
                <Link href={'/projects'}>
                    <MoreCard />
                </Link>
            </div>
        </div>
    );
};

export default Projects;
