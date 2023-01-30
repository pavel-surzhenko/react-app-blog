import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useCreatePost, usePosts } from '../../../hooks';
import { schema }  from './config';
import { Input } from '../elements/input';

export const Composer = () => {
    const createPost = useCreatePost();
    const posts = usePosts();

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const onSubmit = form.handleSubmit(async (body) => {
        await createPost.mutateAsync(body);
        posts.refetch();
        form.reset();
    });

    return (
        <section className = 'composer'>
            <img src = 'https://placeimg.com/256/256/animals' alt = 'avatar'></img>
            <form onSubmit = { onSubmit }>
                <label>
                    <div>
                        <span className = 'error-message'></span>
                    </div>
                    <Input
                        placeholder = "What's on your mind, Chuck Norris?"
                        error = { form.formState.errors.body }
                        register = { form.register('body') }
                        tag = 'textarea' />
                </label>
                <button type = 'submit' >post</button>
            </form>
        </section>
    );
};
