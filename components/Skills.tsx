import React from 'react';

type Props = {};

const Skills = (props: Props) => {
    return (
        <div className="flex flex-col mb-16">
            <div className="group text-3xl font-bold">
                <span className="group-hover:text-orange-400">My </span>
                <span className="text-orange-400 group-hover:text-inherit">
                    Skills
                </span>
            </div>

            <hr className="mt-2 border-2" />
            <div>
                <p className="p-5">tset</p>
            </div>
        </div>
    );
};

export default Skills;
