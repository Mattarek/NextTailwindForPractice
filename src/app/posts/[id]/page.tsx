import UpvoteButton from '@/components/Upvote.button';
import prisma from '@/lib/db';
import { notFound } from 'next/navigation';

interface FetchData {
    title: string;
    data: string;
}
export default async function page({
    params,
}: Readonly<{ params: { id: string } }>) {
    const post = await prisma.post.findUnique({
        where: {
            id: parseInt(params.id),
        },
    });

    if (!post) {
        notFound();
    }

    return (
        <main className="px-7 pt-24 text-center">
            <h1 className="mb-7 text-5xl font-semibold">{post?.title}</h1>
            <p className="mx-auto max-w-[700px]">{post?.body}</p>
            <UpvoteButton />
        </main>
    );
}
