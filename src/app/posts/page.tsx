import Link from 'next/link';
import React, { useEffect } from 'react';

interface Post {
    id: number;
    title: string;
}

export default async function Posts() {
    const response = await fetch('https://dummyjson.com/posts?limit=10');
    const data = await response.json();

    return (
        <main className="px-5 pt-16 text-center">
            <h1 className="mb-5 text-4xl font-bold md:text-5xl">All posts</h1>
            <ul>
                {data.posts.map((post: Post) => {
                    return (
                        <li key={post.id} className="mb-5">
                            <Link href={`/posts/${post.id}`} className="mb-3">
                                {post.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}
