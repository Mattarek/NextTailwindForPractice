import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
    {
        href: '/',
        label: 'Home',
    },
    {
        href: '/posts',
        label: 'Posts',
    },
];
export default function Header() {
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
                        <Link className="text-zinc-500" key={href} href={href}>
                            <li>{label}</li>
                        </Link>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
