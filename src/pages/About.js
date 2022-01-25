import React from 'react';
import {useMemo, useState, useEffect} from "react";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import MyButton from "../component/UI/button/MyButton";
import MyModal from "../component/UI/MyModal/MyModal";
import PostFilter from "../component/PostFilter";
import Pagination from "../component/UI/pagination/Pagination";
import Loader from "../component/UI/loader/Loader";
import PostList from "../component/PostList";
import PostForm from "../component/PostForm";
import {usePosts} from "../hooks/usePosts";
import MySelect from "../component/UI/select/MySelect";


function About() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPage] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);


    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPage(getPageCount(totalCount, limit))
    });

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }


    const removePost = (post) => {

        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
    }


    return (
        <div className="App">

            <MyButton onClick={() => setModal(true)}>
                Создать пост
            </MyButton>

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            {postError &&
            <h3>Ошибка ${postError}</h3>
            }


            <PostFilter filter={filter} setFilter={setFilter}/>

            <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue="Кол элементов"
                options={[
                    {value:5, name:'5'},
                    {value:10, name:'10'},
                    {value:25, name:'25'},
                    {value:-1, name:'Все посты'},
                ]}
            />

            {isPostsLoading
                ? <Loader/>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Заголовок'/>
            }

            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />

        </div>
    );
}

export default About;
