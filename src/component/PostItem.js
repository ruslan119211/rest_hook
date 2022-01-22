import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    return (
        <div className={[props.number, 'post_wrap__item'].join(' ')}>
            <p className='title'>{props.post.id}. {props.post.title}</p>
            <p>{props.post.body}</p>
            <MyButton onClick={() => props.remove(props.post)}>
                Remove
            </MyButton>
        </div>
    )
}

export default PostItem;
