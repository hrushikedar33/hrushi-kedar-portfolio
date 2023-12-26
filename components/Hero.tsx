'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { SocialIcon } from 'react-social-icons';

import { Button } from '@/components/ui/button';
import { HomePage, Social } from '@/typings';
import { urlFor } from '@/sanity/config/clientConfig';

type Props = {
    homePage: HomePage;
    socials: Social[];
};

const Hero = ({ homePage, socials }: Props) => {
    const [text] = useTypewriter({
        words: ['Developer', 'Engineer', 'Learner', 'Creator'],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className="h-[80vh]">
            <div className="grid grid-cols-3 gap-x-10 place-items-center place-content-center w-full h-full">
                <div className="col-span-2">
                    <h1 className="mt-2 text-3xl uppercase md:text-5xl font-semibold tracking-wide">
                        {homePage.name}
                    </h1>
                    <h2 className="mt-2 text-lg uppercase text-gray-500 tracking-widest">
                        {homePage.role}
                    </h2>
                    <hr className="border-2" />
                    <h2 className="mt-6 text-lg md:text-xl font-semibold">
                        <span className="mr-3">{text}</span>
                        <Cursor />
                    </h2>
                    <div className="mt-5 md:mb-20 space-x-2">
                        {socials.map((social) => (
                            <SocialIcon
                                key={social._id}
                                url={social.url}
                                bgColor="transparent"
                                fgColor="gray"
                            />
                        ))}
                    </div>

                    <div className="space-x-2 items-center justify-center">
                        <Button>Mail</Button>
                        <Button>Resume</Button>
                    </div>
                    <div className="mt-5 md:mb-20 space-x-2">
                        <Link href="#about">
                            <button className="heroButton">About</button>
                        </Link>
                        <Link href="#experiances">
                            <button className="heroButton">Experiances</button>
                        </Link>
                        <Link href="#skills">
                            <button className="heroButton">Skills</button>
                        </Link>
                        <Link href="#projects">
                            <button className="heroButton">Projects</button>
                        </Link>
                    </div>
                </div>
                <div className="col-span-1">
                    <div>
                        <Image
                            className="border-2 rounded-full h-[400px] w-[400px] object-contain bg-orange-400"
                            alt="profil-image"
                            src={urlFor(homePage?.heroImage).url()}
                            height={250}
                            width={250}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
