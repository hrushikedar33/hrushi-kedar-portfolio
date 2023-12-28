import React from 'react';

type Props = {};

const Projects = (props: Props) => {
    return (
        <div className="group flex flex-col mb-16">
            <div className="text-2xl md:text-3xl font-bold">
                <span className="group-hover:text-orange-400">My </span>
                <span className="text-orange-400 group-hover:text-inherit">
                    Projects
                </span>
            </div>

            <hr className="mt-2 border-2" />
            <div>
                <p className="p-5">test</p>
            </div>
        </div>
    );
};

export default Projects;
