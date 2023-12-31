import React from 'react';
import { Badge } from './ui/badge';
import { Skill } from '@/typings';
import Image from 'next/image';
import { urlFor } from '@/sanity/config/clientConfig';

type Props = {
    technology: Skill;
};

const SkillBadge = ({ technology }: Props) => {
    return (
        <Badge className="flex gap-x-2 border-2 border-primary hover:bg-primary/10 rounded-md h-8 transition ease-in duration-300">
            <Image
                className="h-6 w-6 object-cover"
                alt={technology.title}
                src={urlFor(technology.image).url()}
                height={16}
                width={16}
            />
            <div className="group-hover:text-orange-400">
                {technology.title}
            </div>
        </Badge>
    );
};

export default SkillBadge;
