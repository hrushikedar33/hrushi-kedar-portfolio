import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { RocketIcon } from '@radix-ui/react-icons';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import SkillBadge from '@/components/skill-badge';
import { Project } from '@/typings';
import { urlFor } from '@/sanity/config/clientConfig';
import Link from 'next/link';

type Props = {
    project: Project;
};

const ProjectCardDescription = ({ project }: Props) => {
    const projectImage = urlFor(project.image).url();

    return (
        <Card className="group">
            <div
                className="flex flex-col bg-cover rounded-md justify-end"
                style={{
                    backgroundImage: `linear-gradient(0deg, rgba(34, 40, 49, 0.95) 33%, rgba(0, 0, 0, 0.3) 100%), url(${projectImage})`,
                }}
            >
                <CardHeader className="">
                    <div className="flex flex-row items-center justify-between">
                        <CardTitle className="dark:text-primary text-secondary group-hover:text-orange-400">
                            {project.title}
                        </CardTitle>
                        <div className="flex items-center justify-center gap-x-2">
                            <SocialIcon
                                url={project.linkToBuild}
                                bgColor="transparent"
                                fgColor="white"
                            />
                            <div>
                                {project?.linkToLaunch?.length > 1 ? (
                                    <Link href={project?.linkToLaunch}>
                                        <RocketIcon
                                            color="orange"
                                            className="h-[1.2rem] w-[1.2rem]"
                                        />
                                    </Link>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    </div>
                    <hr className="mt-2 border-2 border-orange-400 group-hover:border-white" />
                </CardHeader>
                <CardContent>
                    <CardDescription className="text-white mb-4">
                        {project.summary}
                    </CardDescription>
                    {project.points?.map((point, i) => (
                        <ul key={i}>{point}</ul>
                    ))}
                </CardContent>

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

export default ProjectCardDescription;
