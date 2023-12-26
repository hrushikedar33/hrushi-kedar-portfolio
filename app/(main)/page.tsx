import Hero from '@/components/Hero';

import { getHomePage } from '@/sanity/utils/getHomePage';
import { getSocial } from '@/sanity/utils/getSocial';
import Image from 'next/image';

export default async function Home() {
    const homePage = await getHomePage();
    const socials = await getSocial();

    return (
        <div className="flex flex-col items-center justify-center">
            <section id="hero" className="snap-start">
                <Hero homePage={homePage} socials={socials} />
            </section>
        </div>
    );
}
