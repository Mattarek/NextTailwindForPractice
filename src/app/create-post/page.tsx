import { createPost } from '@/actions/actions';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

export default async function page() {
    const { isAuthenticated } = getKindeServerSession();
    if (!(await isAuthenticated())) {
        redirect('/api/auth/login?post_login_redirect_url=/create-post');
    }

    return (
        <main className="pt-16 text-center">
            <h1 className="mb-5 text-4xl font-bold md:text-5xl">Create post</h1>
            <form action={createPost} className="mt-10 h-10 space-x-2">
                <input
                    type="text"
                    name="title"
                    placeholder="Title for new post"
                    className="h-full rounded border px-3"
                    required
                />
                <button className="h-full rounded bg-blue-500 px-5 text-white">
                    Submit
                </button>
            </form>
        </main>
    );
}
