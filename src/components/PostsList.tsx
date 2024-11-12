import Link from 'next/link';

interface Post {
    id: number;
    title: string;
}

export default async function PostsList() {
    const response = await fetch('https://dummyjson.com/posts?limit=10');
    const dataPost = await response.json();

    return (
        <ul>
            {dataPost?.posts.map((post: Post) => {
                return (
                    <li key={post.id} className="mb-5">
                        <Link href={`/posts/${post.id}`} className="mb-3">
                            {post.title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
