import React from 'react';
import Image from 'next/image';

import { urlFor } from '@/sanity/config/clientConfig';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Project } from '@/typings';
import SkillBadge from './skill-badge';

type Props = {
    project: Project;
};

const ProjectCard = ({ project }: Props) => {
    const projectImage = urlFor(project.image).url();

    return (
        <Card>
            <div
                className="flex flex-col bg-cover rounded-md justify-end h-[220px]"
                style={{
                    backgroundImage: `linear-gradient(0deg, rgba(34, 40, 49, 0.95) 33%, rgba(0, 0, 0, 0.3) 100%), url(${projectImage})`,
                }}
            >
                <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                </CardHeader>

                <CardFooter className="flex flex-nowrap overflow-y-auto gap-x-2">
                    {project.technologies?.map((technology) => (
                        <SkillBadge
                            key={technology._id}
                            technology={technology}
                        />
                    ))}
                </CardFooter>
            </div>
        </Card>
    );
};

export default ProjectCard;
