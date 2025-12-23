import { getBlog } from '@/sanity/utils/getBlog';
import React from 'react';
import BlogCard from '@/components/BlogCard';

// Revalidate content every hour (3600 seconds)
export const revalidate = 3600;

const page = async () => {
    const blogs = await getBlog();

    return (
        <div className="grow container mx-auto">
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
                            <BlogCard key={blog._id} blog={blog} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
