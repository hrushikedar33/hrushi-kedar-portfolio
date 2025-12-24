import React from 'react';

import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

type Props = {
    type?: 'projects' | 'blogs';
};

const MoreCard = ({ type = 'projects' }: Props) => {
    const isBlogs = type === 'blogs';

    return (
        <Card className="group h-full">
            <div className="flex flex-col bg-cover rounded-md justify-center items-center h-[220px]">
                <CardHeader className="flex flex-row items-center justify-between px-6 py-2">
                    <CardTitle className="dark:text-primary text-primary group-hover:text-orange-400">
                        {isBlogs ? 'More Blogs' : 'More Projects'}
                    </CardTitle>
                </CardHeader>

                <CardFooter className="inline-flex flex-nowrap gap-2 items-center overflow-y-auto">
                    <CardDescription>
                        {isBlogs
                            ? 'Check out more of my blog posts'
                            : 'For detail description and more about projects'}
                    </CardDescription>
                </CardFooter>
            </div>
        </Card>
    );
};

export default MoreCard;
