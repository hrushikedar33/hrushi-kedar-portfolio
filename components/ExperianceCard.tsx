"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, ExternalLink } from 'lucide-react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import { Experiance } from '@/typings';
import SkillBadge from './skill-badge';
import { urlFor } from '@/sanity/config/clientConfig';
import MarkdownRenderer from './MarkdownRenderer';

type Props = {
    experiance: Experiance;
};

const ExperianceCard = ({ experiance }: Props) => {
    const [isPinnedExpanded, setIsPinnedExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const isExpanded = isPinnedExpanded || isHovered;

    const handleToggle = () => {
        setIsPinnedExpanded((currentValue) => !currentValue);
    };

    return (
        <Card
            className="group mb-5 overflow-hidden border-border/60 shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer"
            onClick={handleToggle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role="button"
            tabIndex={0}
            aria-expanded={isExpanded}
            aria-controls={`experience-${experiance._id}`}
            onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    handleToggle();
                }
            }}
        >
            <CardHeader>
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex gap-x-4 items-center min-w-0">
                        <Image
                            className="rounded-full h-16 w-16 object-contain mx-auto ring-1 ring-border/60"
                            src={urlFor(experiance?.companyImage).url()}
                            alt="Company logo"
                            height={40}
                            width={40}
                        />

                        <div className="flex flex-col min-w-0">
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                <CardTitle className="truncate text-xl md:text-2xl">
                                    {experiance.companyUrl ? (
                                        <Link
                                            href={experiance.companyUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="hover:text-orange-400 transition-colors"
                                            onClick={(event) => event.stopPropagation()}
                                        >
                                            {experiance.company}
                                        </Link>
                                    ) : (
                                        experiance.company
                                    )}
                                </CardTitle>

                                {experiance.companyUrl && (
                                    <Link
                                        href={experiance.companyUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-orange-400 hover:text-orange-400"
                                        aria-label={`Open ${experiance.company} website`}
                                        onClick={(event) => event.stopPropagation()}
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                    </Link>
                                )}
                            </div>
                            <CardDescription className="group-hover:text-orange-400 transition-colors">
                                {experiance.jobTitle}
                            </CardDescription>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 md:items-end text-sm">
                        <CardDescription>{experiance.jobLocation}</CardDescription>
                        <CardDescription>
                            {new Date(experiance.dateStarted).toDateString()} -{' '}
                            {experiance.isCurrentlyWorking
                                ? 'Present'
                                : new Date(experiance.dateEnded).toDateString()}
                        </CardDescription>
                    </div>
                </div>

                <div className="mt-2 flex items-center justify-between gap-3">
                    <div className="h-1 w-12 rounded-full bg-orange-400 transition-all duration-500 group-hover:w-24" />

                    <div className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:border-orange-400 group-hover:text-orange-400">
                        {isExpanded ? 'Collapse' : 'Expand'}
                        <ChevronDown
                            className={`h-4 w-4 transition-transform duration-300 ${
                                isExpanded ? 'rotate-180' : ''
                            }`}
                        />
                    </div>
                </div>
            </CardHeader>

            <div
                id={`experience-${experiance._id}`}
                className={`grid transition-all duration-300 ease-in-out ${
                    isExpanded
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                }`}
            >
                <div className="overflow-hidden">
                    <CardContent className="space-y-6 pt-0">
                        <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
                            {experiance.description ? (
                                <MarkdownRenderer
                                    content={experiance.description}
                                />
                            ) : (
                                <p className="text-sm text-muted-foreground">
                                    No description added yet.
                                </p>
                            )}
                        </div>
                    </CardContent>

                    <CardFooter className="flex flex-wrap gap-2 pt-0">
                        {experiance.technologies.map((technology, i) => (
                            <SkillBadge key={i} technology={technology} />
                        ))}
                    </CardFooter>
                </div>
            </div>
        </Card>
    );
};

export default ExperianceCard;
