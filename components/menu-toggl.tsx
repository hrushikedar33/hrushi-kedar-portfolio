'use client';

import * as React from 'react';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function MenuToggle() {
    const router = useRouter();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    className="bg-transparent border-2 rounded-lg"
                    variant="outline"
                    size="icon"
                >
                    <HamburgerMenuIcon
                        color="orange"
                        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"
                    />
                    {/* <Cross1Icon
                        color="orange"
                        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                    /> */}
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => router.push('/')}>
                    Home
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/projects')}>
                    Projects
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/contact')}>
                    Contact
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
