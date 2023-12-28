import { Social } from '@/typings';
import { HeartFilledIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

type Props = {};

const Footer = ({}: Props) => {
    const year = new Date().getFullYear().toString();

    return (
        <div className="flex flex-col p-5 items-center">
            <hr className="border-2 w-full" />
            <p className="mt-4">
                {year}{' '}
                <Link
                    className="hover:text-orange-400"
                    href={'https://github.com/hrushikedar33'}
                >
                    © hrushikedar33
                </Link>
            </p>
            <p className="inline-flex items-center justify-center">
                Built with&nbsp;
                <span>
                    <HeartFilledIcon
                        color="orange"
                        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"
                    />
                </span>
                &nbsp;using&nbsp;
                <Link href={'https://nextjs.org/'}>NextJS</Link>
            </p>
        </div>
    );
};

export default Footer;
