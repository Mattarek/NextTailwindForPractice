import { createPost } from '@/actions/actions';
import { Form } from '@/components';
import {
    getKindeServerSession,
    LogoutLink,
} from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

export default async function page() {
    const { isAuthenticated } = getKindeServerSession();
    if (!(await isAuthenticated())) {
        redirect('/api/auth/login?post_login_redirect_url=/create-post');
    }

    return (
        <main className="pt-16 text-center">
            <h1 className="mx-auto mb-5 flex-col text-4xl font-bold md:text-5xl">
                Create post
            </h1>
            <Form createPost={createPost} />
            <LogoutLink>Log out</LogoutLink>
        </main>
    );
}
