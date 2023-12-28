'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { SocialIcon } from 'react-social-icons';
import { EnvelopeIcon, BookOpenIcon } from '@heroicons/react/24/outline';

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
            <div className="grid grid-cols-1 md:grid-cols-4 place-content-center place-items-center items-center justify-center gap-x-10 w-full h-full">
                <div className="flex flex-col md:block items-center justify-center order-last md:order-1 md:col-span-2">
                    <h1 className="mt-2 text-3xl uppercase md:text-4xl lg:text-5xl font-semibold tracking-wide">
                        {homePage.name}
                    </h1>
                    <h2 className="mt-2 text-lg uppercase text-gray-500 tracking-widest">
                        {homePage.role}
                    </h2>
                    <hr className="border-2 w-full" />
                    <h2 className="mt-6 text-lg md:text-xl font-semibold">
                        <span className="text-orange-400">{text}</span>
                        <Cursor />
                    </h2>
                    <div className="mt-2 md:mb-20 space-x-2">
                        {/* TODO: change colour of this socials */}
                        {socials.map((social) => (
                            <SocialIcon
                                key={social._id}
                                url={social.url}
                                bgColor="transparent"
                                fgColor="gray"
                            />
                        ))}
                    </div>

                    <div className="mt-10 md:mt-0 space-x-2">
                        <Link
                            href={`mailto:${homePage.email}?subject=IMP:%20Want%20to%20talk`}
                        >
                            <Button className="font-semibold border-2 hover:text-orange-400 hover:bg-inherit">
                                <EnvelopeIcon className="h-7 w-7" /> &nbsp;Mail
                            </Button>
                        </Link>
                        <Link href={homePage.resumeURL}>
                            <Button className="font-semibold border-2 hover:text-orange-400 hover:bg-inherit">
                                {' '}
                                <BookOpenIcon className="h-7 w-7" />{' '}
                                &nbsp;Resume
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-5 md:mb-20 space-x-2">
                        <Link href="#about-me">
                            <button className="heroButton hover:text-orange-400">
                                About
                            </button>
                        </Link>
                        <Link href="#my-experiance">
                            <button className="heroButton hover:text-orange-400">
                                Experiance
                            </button>
                        </Link>
                        <Link href="#my-skills">
                            <button className="heroButton hover:text-orange-400">
                                Skills
                            </button>
                        </Link>
                        <Link href="#my-projects">
                            <button className="heroButton hover:text-orange-400">
                                Projects
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="order-1 md:order-last mb-6 md:mb-0 md:col-span-2">
                    <div>
                        <Image
                            className="border-2 rounded-full h-[200px] w-[200px] md:h-[400px] md:w-[400px] object-contain bg-orange-400"
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
