import React from 'react';

import { HomePage } from '@/typings';

type Props = {
    homePage: HomePage;
};

const AboutMe = ({ homePage }: Props) => {
    return (
        <div className="flex flex-col mb-16">
            <div className="group text-3xl font-bold">
                <span className="group-hover:text-orange-400">About </span>
                <span className="text-orange-400 group-hover:text-inherit">
                    Me
                </span>
            </div>

            <hr className="mt-2 border-2" />
            <div className="p-5">
                <p>{homePage.backgroundInformation}</p>
            </div>
        </div>
    );
};

export default AboutMe;
