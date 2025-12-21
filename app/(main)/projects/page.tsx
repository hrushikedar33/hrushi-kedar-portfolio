import { getProject } from '@/sanity/utils/getProject';
import React from 'react';
import ProjectCardDescription from './project-card';

// Revalidate content every hour (3600 seconds)
export const revalidate = 3600;

const page = async () => {
    const projects = await getProject();

    return (
        <div className="grow container mx-auto">
            <div className="flex flex-col mb-16">
                <div className="group text-2xl md:text-3xl font-bold">
                    <span className="group-hover:text-orange-400">My </span>
                    <span className="text-orange-400 group-hover:text-inherit">
                        Projects
                    </span>
                </div>

                <hr className="mt-2 border-2" />
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 p-5">
                    {projects.map((project) => (
                        <ProjectCardDescription
                            key={project._id}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default page;
