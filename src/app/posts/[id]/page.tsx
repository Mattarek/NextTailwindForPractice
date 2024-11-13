import UpvoteButton from '@/components/Upvote.button';

interface FetchData {
    title: string;
    data: string;
}
export default async function page({
    params,
}: Readonly<{ params: { id: number } }>) {
    const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
    const dataPost: FetchData = await response.json();

    return (
        <main className="px-7 pt-24 text-center">
            <h1 className="mb-7 text-5xl font-semibold">{dataPost.title}</h1>
            <p className="mx-auto max-w-[700px]">{dataPost.data}</p>
            <UpvoteButton />
        </main>
    );
}
