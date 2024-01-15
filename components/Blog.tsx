import React from 'react';
import Link from 'next/link';

import { Blog } from '@/typings';
import BlogCard from './BlogCard';
import MoreCard from './more-card';

type Props = {
    blogs: Blog[];
};

const Blog = ({ blogs }: Props) => {
    return (
        <div className="flex flex-col mb-16">
            <div className="group text-2xl md:text-3xl font-bold">
                <span className="group-hover:text-orange-400">My </span>
                <span className="text-orange-400 group-hover:text-inherit">
                    Blogs
                </span>
            </div>

            <hr className="mt-2 border-2" />
            <div className="p-5">
                <p className="mb-5">
                    I am not fond of writing blogs but here are some 😅
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {blogs?.map((blog) => (
                        <BlogCard key={blog._id} blog={blog}></BlogCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
