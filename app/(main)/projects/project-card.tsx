import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/config/clientConfig';
import { SocialIcon } from 'react-social-icons';
import {
    RocketIcon,
    ExternalLinkIcon,
    GitHubLogoIcon,
} from '@radix-ui/react-icons';
import { Project } from '@/typings';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type Props = {
    project: Project;
};

const ProjectCardDescription = ({ project }: Props) => {
    const projectImage = urlFor(project.image).url();

    return (
        <Card className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="flex flex-col lg:flex-row h-full">
                {/* Image Section */}
                <div className="relative lg:w-2/5 h-48 lg:h-auto overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${projectImage})` }}
                    />

                    {/* Floating Action Buttons */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.linkToBuild && (
                            <Link
                                href={project.linkToBuild}
                                target="_blank"
                                className="p-2.5 rounded-full bg-background/90 backdrop-blur-sm shadow-lg hover:bg-orange-400 hover:text-white transition-all duration-300 hover:scale-110"
                            >
                                <GitHubLogoIcon className="h-4 w-4" />
                            </Link>
                        )}
                        {project?.linkToLaunch?.length > 1 && (
                            <Link
                                href={project.linkToLaunch}
                                target="_blank"
                                className="p-2.5 rounded-full bg-orange-400 text-white shadow-lg hover:bg-orange-500 transition-all duration-300 hover:scale-110"
                            >
                                <ExternalLinkIcon className="h-4 w-4" />
                            </Link>
                        )}
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col p-6 lg:p-8">
                    {/* Header */}
                    <div className="mb-4">
                        <div className="flex items-start justify-between gap-4">
                            <CardTitle className="text-xl lg:text-2xl font-bold group-hover:text-orange-400 transition-colors duration-300">
                                {project.title}
                            </CardTitle>
                            <div className="flex gap-2 lg:hidden">
                                {project.linkToBuild && (
                                    <Link
                                        href={project.linkToBuild}
                                        target="_blank"
                                        className="p-2 rounded-full bg-muted hover:bg-orange-400 hover:text-white transition-colors"
                                    >
                                        <GitHubLogoIcon className="h-4 w-4" />
                                    </Link>
                                )}
                                {project?.linkToLaunch?.length > 1 && (
                                    <Link
                                        href={project.linkToLaunch}
                                        target="_blank"
                                        className="p-2 rounded-full bg-orange-400 text-white hover:bg-orange-500 transition-colors"
                                    >
                                        <ExternalLinkIcon className="h-4 w-4" />
                                    </Link>
                                )}
                            </div>
                        </div>
                        <div className="h-1 w-12 bg-orange-400 rounded-full mt-2 group-hover:w-24 transition-all duration-500" />
                    </div>

                    {/* Description */}
                    <CardDescription className="text-muted-foreground mb-4 text-sm lg:text-base leading-relaxed">
                        {project.summary}
                    </CardDescription>

                    {/* Points */}
                    {project.points && project.points.length > 0 && (
                        <ul className="space-y-2 mb-6 flex-1">
                            {project.points?.slice(0, 3).map((point, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-3 text-sm text-muted-foreground"
                                >
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                        {project.technologies?.map((technology) => (
                            <Badge
                                key={technology._id}
                                variant="secondary"
                                className="px-3 py-1 text-xs font-medium bg-muted/50 hover:bg-orange-400/20 hover:text-orange-400 transition-colors duration-300"
                            >
                                {technology.title}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default ProjectCardDescription;
