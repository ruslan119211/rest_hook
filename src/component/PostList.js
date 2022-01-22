import React from 'react';
import PostItem from "./PostItem";
import TransitionGroup from "react-transition-group/cjs/TransitionGroup";
import CSSTransition from "react-transition-group/cjs/CSSTransition";

const PostList = ({posts, title, remove}) => {

    if (!posts.length) {
        return <div> Постов нету</div>
    }
    return (
        <div>
            <h2>{title}</h2>
            <TransitionGroup className='post_wrap'>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem remove={remove} number={index + 1} post={post}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}
export default PostList;
