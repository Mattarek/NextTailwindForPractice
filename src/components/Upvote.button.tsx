'use client';
import React, { useState } from 'react';

export default function UpvoteButton() {
    const [upvoteCount, setUpvoteCount] = useState(0);
    const handleClick = () => setUpvoteCount((p) => p + 1);

    return (
        <button
            onClick={handleClick}
            className="mt-10 bg-blue-500 p-2 text-white"
        >
            {upvoteCount}
        </button>
    );
}
