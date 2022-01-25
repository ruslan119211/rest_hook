import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../component/UI/loader/Loader";
import {useNavigate} from "react-router-dom";

const PostIdPage = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    },[])

    return (
        <div>
            <h1>Пост {params.id}</h1>
            <button onClick={() => navigate(-1)}>назад</button>
            {isLoading
                ? <Loader/>
                : <div>{post.id}. {post.title}<br/> {post.body}</div>
            }
            <h3>Коментарии</h3>
            {isComLoading
                ? <Loader/>
                : <div>
                    {comments.map(comm =>
                        <div key={comm.id}>
                            <p>{comm.email}</p>
                            <p><b>{comm.name}</b></p>
                            <p>{comm.body}</p>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;
