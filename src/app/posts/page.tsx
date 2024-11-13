import PostsList from '@/components/PostsList';
import React, { Suspense } from 'react';

export default function Posts() {
    return (
        <main className="px-5 pt-16 text-center">
            <h1 className="mb-5 text-4xl font-bold md:text-5xl">All posts</h1>
            <Suspense fallback="Loading...">
                <PostsList />
            </Suspense>
        </main>
    );
}
``