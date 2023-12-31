import React from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Project } from '@/typings';

type Props = {
    project: Project;
};

const ProjectCard = ({ project }: Props) => {
    return (
        <Card>
            <div>
                <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
            </div>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;
