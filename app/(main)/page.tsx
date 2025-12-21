import AboutMe from '@/components/AboutMe';
import Contact from '@/components/Contact';
import Experiances from '@/components/Experiance';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Blogs from '@/components/Blog';

import { getHomePage } from '@/sanity/utils/getHomePage';
import { getExperiance } from '@/sanity/utils/getExperiance';
import { getSocial } from '@/sanity/utils/getSocial';
import { getTechnologieStack } from '@/sanity/utils/getTechnologieStack';
import { getProject } from '@/sanity/utils/getProject';
import { getBlog } from '@/sanity/utils/getBlog';

// Revalidate content every hour (3600 seconds)
export const revalidate = 3600;

export default async function Home() {
    const homePage = await getHomePage();
    const socials = await getSocial();
    const experiances = await getExperiance();
    const technologyStack = await getTechnologieStack();
    const projects = await getProject();
    const blogs = await getBlog();

    return (
        <div className="container mx-auto">
            <section id="hero" className="snap-start">
                <Hero homePage={homePage} socials={socials} />
            </section>

            <section id="about-me" className="snap-center">
                <AboutMe homePage={homePage} />
            </section>

            <section id="my-experiance" className="snap-center">
                <Experiances experiances={experiances} />
            </section>

            <section id="my-skills" className="snap-center">
                <Skills technologyStack={technologyStack} />
            </section>

            <section id="my-projects" className="snap-center">
                <Projects projects={projects} />
            </section>

            <section id="my-blogs" className="snap-center">
                <Blogs blogs={blogs} />
            </section>

            <section id="contact-me" className="snap-end">
                <Contact homePage={homePage} />
            </section>
        </div>
    );
}
