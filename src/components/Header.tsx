'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
    {
        href: '/',
        label: 'Home',
    },
    {
        href: '/posts',
        label: 'Posts',
    },
    {
        href: '/create-post',
        label: 'Create post',
    },
];
export default function Header() {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <header className="flex items-center justify-between border-b px-7 py-4">
            <Image
                src="https://bytegrad.com/course-assets/youtube/example-logo.png"
                alt="Logo"
                className="h-[35px] w-[35px]"
                width="35"
                height="35"
            />
            <nav>
                <ul className="flex gap-x-5 text-[14px]">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            className={` ${pathname === href ? 'text-zinc-900' : 'text-zinc-400'}`}
                            key={href}
                            href={href}
                        >
                            <li>{label}</li>
                        </Link>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
