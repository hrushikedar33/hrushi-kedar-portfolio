import React from 'react';
import Link from 'next/link';

import { Blog } from '@/typings';
import BlogCard from './BlogCard';
import MoreCard from './more-card';
import MobileCarousel from './MobileCarousel';
import { Button } from '@/components/ui/button';

type Props = {
    blogs: Blog[];
};

const Blogs = ({ blogs }: Props) => {
    // Show only first 2 blogs on homepage
    const displayBlogs = blogs?.slice(0, 2) || [];

    const carouselItems = [
        ...displayBlogs.map((blog) => <BlogCard key={blog._id} blog={blog} />),
        <Link key="more-blogs" href="/blogs" className="block h-full">
            <MoreCard type="blogs" />
        </Link>,
    ];

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

                {/* Mobile Carousel */}
                <MobileCarousel>{carouselItems}</MobileCarousel>

                {/* Mobile CTA */}
                <Link
                    href="/blogs"
                    className="md:hidden flex items-center justify-center mt-4 py-2.5 px-6 "
                >
                    <Button className="font-semibold border-2 hover:text-orange-400 hover:bg-inherit rounded-lg transition-colors">
                        View All Blogs
                    </Button>
                </Link>

                {/* Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-3 gap-6">
                    {displayBlogs.map((blog) => (
                        <BlogCard key={blog._id} blog={blog} />
                    ))}
                    <Link href="/blogs">
                        <MoreCard type="blogs" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
