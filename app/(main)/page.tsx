import AboutMe from '@/components/AboutMe';
import Contact from '@/components/Contact';
import Experiance from '@/components/Experiance';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

import { getHomePage } from '@/sanity/utils/getHomePage';
import { getExperiance } from '@/sanity/utils/getExperiance';
import { getSocial } from '@/sanity/utils/getSocial';
import { getTechnologieStack } from '@/sanity/utils/getTechnologieStack';

export default async function Home() {
    const homePage = await getHomePage();
    const socials = await getSocial();
    const experiance = await getExperiance();
    const technologyStack = await getTechnologieStack();

    return (
        <div className="container mx-auto">
            <section id="hero" className="snap-start">
                <Hero homePage={homePage} socials={socials} />
            </section>

            <section id="about-me" className="snap-center">
                <AboutMe homePage={homePage} />
            </section>

            <section id="my-experiance" className="snap-center">
                <Experiance experiance={experiance} />
            </section>

            <section id="my-skills" className="snap-center">
                <Skills technologyStack={technologyStack} />
            </section>

            <section id="my-projects" className="snap-center">
                <Projects />
            </section>

            <section id="contact-me" className="snap-end">
                <Contact homePage={homePage} />
            </section>
        </div>
    );
}
