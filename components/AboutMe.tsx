import React from 'react';

import { HomePage } from '@/typings';
import MarkdownRenderer from './MarkdownRenderer';

type Props = {
    homePage: HomePage;
};

const AboutMe = ({ homePage }: Props) => {
    return (
        <div className="group flex flex-col mb-16">
            <div className="text-2xl md:text-3xl font-bold">
                <span className="group-hover:text-orange-400">About </span>
                <span className="text-orange-400 group-hover:text-inherit">
                    Me
                </span>
            </div>

            <hr className="mt-2 border-2" />
            <div className="p-5 text-base leading-relaxed text-foreground/90">
                <MarkdownRenderer content={homePage.backgroundInformation} />
            </div>
        </div>
    );
};

export default AboutMe;
