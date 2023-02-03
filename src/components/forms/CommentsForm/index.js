import { useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { useComment } from '../../../hooks';
import { getPostId } from '../../../lib/redux/selectors';
import { Input } from '../elements/input';
import { schema }  from './config';


export const CommentsForm = () => {
    const hash = useSelector(getPostId);
    const comment = useComment();

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const onSubmit = form.handleSubmit(async (body) => {
        await comment.mutate({ hash, body });
        form.reset();
    });

    return (
        <>
            <form className = 'commentForm' onSubmit = { onSubmit }>
                <img
                    src = 'https://placeimg.com/256/256/animals' alt = 'avatar'
                    className = 'comment-avatar'></img>
                <label>
                    <div>
                        <span className = 'error-message'></span>
                    </div>
                    <Input
                        placeholder = 'Comments...'
                        type = 'text'
                        register = { form.register('body') }
                        error = { form.formState.errors.body } />
                </label>
                <button type = 'submit'>Comment</button>
            </form>
            <hr className = 'separator'></hr>
        </>
    );
};
