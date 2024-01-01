import React from 'react';

import { Experiance } from '@/typings';
import ExperianceCard from './ExperianceCard';

type Props = {
    experiances: Experiance[];
};

const Experiance = ({ experiances }: Props) => {
    return (
        <div className="flex flex-col mb-16">
            <div className="group text-2xl md:text-3xl font-bold">
                <span className="group-hover:text-orange-400">My </span>
                <span className="text-orange-400 group-hover:text-inherit">
                    Experiance
                </span>
            </div>

            <hr className="mt-2 border-2" />
            <div className="p-5">
                {experiances?.map((experiance) => (
                    // TODO: mobile view make it scrollable horizontal
                    <ExperianceCard
                        key={experiance._id}
                        experiance={experiance}
                    />
                ))}
            </div>
        </div>
    );
};

export default Experiance;
