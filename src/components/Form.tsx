import React from 'react';

type FormProps = {
    createPost: (formData: FormData) => Promise<void>;
};

export default function Form({ createPost }: Readonly<FormProps>) {
    return (
        <form
            action={createPost}
            className="mx-auto my-10 flex max-w-[400px] flex-col gap-2"
        >
            <input
                type="text"
                name="title"
                placeholder="Title for new post"
                className="h-10 rounded border px-3"
                required
            />
            <textarea
                name="body"
                placeholder="Body content for new post"
                rows={6}
                className="rounded border px-3 py-2"
                required
            ></textarea>
            <button className="h-full rounded bg-blue-500 px-5 text-white">
                Submit
            </button>
        </form>
    );
}
