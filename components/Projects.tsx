import React from 'react';

import { Project } from '@/typings';
import ProjectCard from './ProjectCard';

type Props = {
    projects: Project[];
};

const Projects = ({ projects }: Props) => {
    return (
        <div className="group flex flex-col mb-16">
            <div className="text-2xl md:text-3xl font-bold">
                <span className="group-hover:text-orange-400">My </span>
                <span className="text-orange-400 group-hover:text-inherit">
                    Projects
                </span>
            </div>

            <hr className="mt-2 border-2" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5">
                {projects?.map((project) => (
                    <ProjectCard key={project._id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
