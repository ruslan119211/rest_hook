import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from 'react-router-dom'

const PostItem = (props) => {

    const router = useNavigate()

    return (
        <div className={[props.number, 'post_wrap__item'].join(' ')}>
            <p className='title'>{props.post.id}. {props.post.title}</p>
            <p>{props.post.body}</p>
            <MyButton onClick={() => router(`/posts/${props.post.id}`)}>
                Открыть
            </MyButton>
            <MyButton onClick={() => props.remove(props.post)}>
                Удалить
            </MyButton>
        </div>
    )
}

export default PostItem;
