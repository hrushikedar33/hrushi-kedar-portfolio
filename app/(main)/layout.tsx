import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { getHomePage } from '@/sanity/utils/getHomePage';
import React from 'react';

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
    const homePage = await getHomePage();

    return (
        <div className="flex flex-col min-h-[100dvh] scrollbar-hide">
            <Header homePage={homePage} />
            <main className="grow">{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
