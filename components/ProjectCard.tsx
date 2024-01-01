import React from 'react';
import { SocialIcon } from 'react-social-icons';

import { urlFor } from '@/sanity/config/clientConfig';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Project } from '@/typings';
import SkillBadge from './skill-badge';

type Props = {
    project: Project;
};

const ProjectCard = ({ project }: Props) => {
    const projectImage = urlFor(project.image).url();

    return (
        <Card className="group">
            <div
                className="flex flex-col bg-cover rounded-md justify-end h-[220px]"
                style={{
                    backgroundImage: `linear-gradient(0deg, rgba(34, 40, 49, 0.95) 33%, rgba(0, 0, 0, 0.3) 100%), url(${projectImage})`,
                }}
            >
                <CardHeader className="flex flex-row items-center justify-between px-6 py-2">
                    <CardTitle className="dark:text-primary text-secondary">
                        {project.title}
                    </CardTitle>
                    <div>
                        <SocialIcon
                            url={project.linkToBuild}
                            bgColor="transparent"
                            fgColor="white"
                        />
                    </div>
                </CardHeader>

                <CardFooter className="inline-flex flex-nowrap gap-2 overflow-y-auto">
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
