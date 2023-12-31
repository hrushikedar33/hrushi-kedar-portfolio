import React from 'react';
import Image from 'next/image';

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

type Props = {
    experiance: Experiance;
};

const ExperianceCard = ({ experiance }: Props) => {
    return (
        <Card className="mb-5">
            <CardHeader>
                <div className="flex gap-x-4 items-center">
                    <Image
                        className="rounded-full h-16 w-16 object-contain mx-auto"
                        src={urlFor(experiance?.companyImage).url()}
                        alt="TechnologyImage"
                        height={40}
                        width={40}
                    />

                    <div className="block md:flex flex-1 md:flex-row md:justify-between items-center">
                        <div className="flex flex-col">
                            <CardTitle>{experiance.company}</CardTitle>
                            <CardDescription className="group-hover:text-orange-400">
                                {experiance.jobTitle}
                            </CardDescription>
                        </div>
                        <div className="flex flex-col md:items-center gap-x-3">
                            <CardDescription>
                                {experiance.jobLocation}
                            </CardDescription>
                            <CardDescription>
                                {new Date(
                                    experiance.dateStarted
                                ).toDateString()}{' '}
                                -{' '}
                                {experiance.isCurrentlyWorking
                                    ? 'Present'
                                    : new Date(
                                          experiance.dateEnded
                                      ).toDateString()}
                            </CardDescription>
                        </div>
                    </div>
                </div>
                <hr className="b-2" />
            </CardHeader>
            <CardContent>
                {experiance.points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </CardContent>
            <CardFooter className="felx gap-x-2">
                {experiance.technologies.map((technology, i) => (
                    <SkillBadge key={i} technology={technology} />
                ))}
            </CardFooter>
        </Card>
    );
};

export default ExperianceCard;
