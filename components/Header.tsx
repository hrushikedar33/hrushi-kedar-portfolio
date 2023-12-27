'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { ModeToggle } from './theme-toggle';
import { HomePage } from '@/typings';
import { Button } from '@/components/ui/button';

type Props = {
    homePage: HomePage;
};

const Header = ({ homePage }: Props) => {
    return (
        <header className="sticky top-0 py-5 z-30">
            <div className="flex container mx-auto items-center justify-between">
                {/* Left side */}
                <Link href={'/'} prefetch={false}>
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -500,
                            scale: 0.5,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            scale: 1,
                        }}
                        transition={{ duration: 1.5 }}
                        className="group font-bold text-xl md:text-3xl cursor-pointer"
                    >
                        <span className="group-hover:text-orange-400">
                            hrush
                        </span>
                        <span className="text-orange-400 group-hover:text-inherit">
                            i
                        </span>
                        <span className="group-hover:text-orange-400">
                            kedar
                        </span>
                    </motion.div>
                </Link>
                {/* Roght Side */}
                <motion.div
                    initial={{
                        opacity: 0,
                        x: +500,
                        scale: 0.5,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        scale: 1,
                    }}
                    transition={{ duration: 1.5 }}
                    className="flex flex-row items-center text-gray-300 space-x-3 cursor-pointer"
                >
                    {/* TODO: Mobile view hamburgir menue */}
                    <Button className="font-semibold hover:text-orange-400 hover:bg-inherit hover:border-2">
                        Projects
                    </Button>
                    <Button className="font-semibold hover:text-orange-400 hover:bg-inherit hover:border-2">
                        Contact
                    </Button>
                    <div className="bg-black dark:bg-white hover:bg-inherit rounded-lg">
                        <ModeToggle />
                        {/* TODO: change colour of toggle */}
                    </div>
                </motion.div>
            </div>
        </header>
    );
};

export default Header;
