import React from 'react';

import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

type Props = {};

const MoreCard = (props: Props) => {
    return (
        <Card className="group">
            <div className="flex flex-col bg-cover rounded-md justify-center items-center h-[220px]">
                <CardHeader className="flex flex-row items-center justify-between px-6 py-2">
                    <CardTitle className="dark:text-primary text-secondary group-hover:text-orange-400">
                        More Projects
                    </CardTitle>
                </CardHeader>

                <CardFooter className="inline-flex flex-nowrap gap-2 items-center overflow-y-auto">
                    <CardDescription>
                        For detail description and more about projects
                    </CardDescription>
                </CardFooter>
            </div>
        </Card>
    );
};

export default MoreCard;
