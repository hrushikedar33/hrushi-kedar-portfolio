import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { getHomePage } from '@/sanity/utils/getHomePage';
import { getSocial } from '@/sanity/utils/getSocial';
import React from 'react';

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
    const homePage = await getHomePage();
    const socials = await getSocial();

    return (
        <div className="flex flex-col min-h-screen">
            <Header homePage={homePage} />
            <div className="flex-1">{children}</div>
            <Footer />
        </div>
    );
};

export default MainLayout;
