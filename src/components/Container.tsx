import React, { type ReactNode } from 'react';

export default function Container({
    children,
}: Readonly<{ children: ReactNode }>) {
    return (
        <div className="mx-auto flex min-h-screen max-w-[1100px] flex-col bg-white">
            {children}
        </div>
    );
}
