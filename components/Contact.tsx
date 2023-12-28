import { HomePage } from '@/typings';
import Link from 'next/link';
import React from 'react';

type Props = {
    homePage: HomePage;
};

const Contact = ({ homePage }: Props) => {
    return (
        <div className="group flex flex-col mb-16">
            <div className="text-2xl md:text-3xl font-bold">
                <span className="group-hover:text-orange-400">Contact </span>
                <span className="text-orange-400 group-hover:text-inherit">
                    Me
                </span>
            </div>

            <hr className="mt-2 border-2" />
            <div className="p-5">
                <p className="">No fancy contact section here 😅</p>
                <p className="">
                    Just email me at:{' '}
                    <Link
                        href={`mailto:${homePage.email}?subject=IMP:%20Want%20to%20talk`}
                        target="_blank"
                        rel="nofollow noreferrer"
                    >
                        <span className="text-orange-400 font-semibold">
                            {homePage.email}
                        </span>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Contact;
