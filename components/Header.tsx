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
        <header className="flex flex-row sticky top-0 p-5 items-center justify-between z-20 md:mx-20">
            {/* Left side */}
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
                className="font-bold text-2xl cursor-pointer"
            >
                hrush
                <span className="text-orange-400">i</span>kedar
            </motion.div>

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
                <Button className="hover:text-orange-400 font-semibold">
                    Projects
                </Button>
                <Button className="hover:text-orange-400 font-semibold">
                    Contact
                </Button>
                <div className="bg-black dark:bg-white rounded-lg">
                    <ModeToggle />
                </div>
            </motion.div>
        </header>
    );
};

export default Header;
