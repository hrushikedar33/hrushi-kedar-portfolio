import { TechnologieStack } from '@/typings';
import React from 'react';
import { Badge } from './ui/badge';

type Props = {
    technologyStack: TechnologieStack;
};

const Skills = ({ technologyStack }: Props) => {
    return (
        <div className="group flex flex-col mb-16">
            <div className="text-2xl md:text-3xl font-bold">
                <span className="group-hover:text-orange-400">My </span>
                <span className="text-orange-400 group-hover:text-inherit">
                    Skills
                </span>
            </div>

            <hr className="mt-2 border-2" />
            <div className="grid grid-cols-8 gap-y-6 p-5">
                <div className="col-span-8 md:col-span-2 bg-primary/10 h-full flex items-center md:justify-end border-l-2 border-primary px-4">
                    <h3 className="font-medium">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 col-span-8 md:col-span-6 px-4">
                    {technologyStack.languages.map((language, i) => (
                        <Badge
                            className="border-2 border-primary text-orange-400 bg-primary/10 rounded-md h-6 md:h-8 transition ease-in duration-300"
                            key={i}
                        >
                            {language}
                        </Badge>
                    ))}
                </div>
                <div className="col-span-8 md:col-span-2 bg-primary/10 h-full flex items-center md:justify-end border-l-2 border-primary px-4">
                    <h3 className="font-mediums">Framework/Libraries</h3>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 col-span-8 md:col-span-6 px-4">
                    {technologyStack.frameworks.map((framework, i) => (
                        <Badge
                            className="border-2 border-primary text-orange-400 bg-primary/10 rounded-md h-6 md:h-8 transition ease-in duration-300"
                            key={i}
                        >
                            {framework}
                        </Badge>
                    ))}
                </div>
                <div className="col-span-8 md:col-span-2 bg-primary/10 h-full flex items-center md:justify-end border-l-2 border-primary px-4">
                    <h3 className="font-medium">Databases</h3>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 col-span-8 md:col-span-6 px-4">
                    {technologyStack.databases.map((database, i) => (
                        <Badge
                            className="border-2 border-primary text-orange-400 bg-primary/10 rounded-md h-6 md:h-8 transition ease-in duration-300"
                            key={i}
                        >
                            {database}
                        </Badge>
                    ))}
                </div>
                <div className="col-span-8 md:col-span-2 bg-primary/10 h-full flex items-center md:justify-end border-l-2 border-primary px-4">
                    <h3 className="font-medium">Tools</h3>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 col-span-8 md:col-span-6 px-4">
                    {technologyStack.tools.map((tool, i) => (
                        <Badge
                            className="border-2 border-primary text-orange-400 bg-primary/10 rounded-md h-6 md:h-8 transition ease-in duration-300"
                            key={i}
                        >
                            {tool}
                        </Badge>
                    ))}
                </div>
                {/* <div className="flex space-x-4">
                    {technologyStack.languages.map((language, i) => (
                        <Badge
                            className="bg-primary/10 hover:bg-primary/20 rounded-md border border-primary h-6 md:h-8 transition ease-in duration-300"
                            key={i}
                        >
                            {language}
                        </Badge>
                    ))}
                </div>
                <div className="flex space-x-4">
                    {technologyStack.frameworks.map((framework, i) => (
                        <Badge
                            className="border-2 border-orange-400 bg-orange-200 rounded-sm"
                            key={i}
                        >
                            {framework}
                        </Badge>
                    ))}
                </div> */}
            </div>
        </div>
    );
};

export default Skills;
