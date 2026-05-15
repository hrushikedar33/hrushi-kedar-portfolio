import React from 'react';
import { SocialIcon } from 'react-social-icons';

import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import { Blog } from '@/typings';
import SkillBadge from './skill-badge';
import MarkdownRenderer from './MarkdownRenderer';

type Props = {
    blog: Blog;
};

const BlogCard = ({ blog }: Props) => {
    return (
        <Card className="group">
            <CardHeader>
                <div className="flex flex-row items-center justify-between">
                    <CardTitle className="group-hover:text-orange-400">
                        {blog.title}
                    </CardTitle>
                    <div>
                        <SocialIcon
                            url={blog.linkToBlog}
                            bgColor="transparent"
                            fgColor="orange"
                        />
                    </div>
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">
                    <MarkdownRenderer content={blog.summary} />
                </div>
            </CardHeader>

            <CardFooter className="inline-flex flex-nowrap gap-2 overflow-y-auto">
                {blog.technologies?.map((technology) => (
                    <SkillBadge key={technology._id} technology={technology} />
                ))}
            </CardFooter>
        </Card>
    );
};

export default BlogCard;
