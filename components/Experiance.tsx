import React from 'react';

import { Experiance } from '@/typings';

type Props = {
    experiance: Experiance[];
};

const Experiance = ({ experiance }: Props) => {
    return (
        <div className="group flex flex-col mb-16">
            <div className="text-3xl font-bold">
                <span className="group-hover:text-orange-400">My </span>
                <span className="text-orange-400 group-hover:text-inherit">
                    Experiance
                </span>
            </div>

            <hr className="mt-2 border-2" />
            <div>
                <p className="p-5">tset</p>
            </div>
        </div>
    );
};

export default Experiance;
