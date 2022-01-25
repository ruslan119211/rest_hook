import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import About from "../pages/About";

export const routes = [
    {
        path: '/about',
        component: About,
        // end: true
    },
    {
        path: '/posts',
        component: Posts,
        // end: true
    },
    {
        path: '/posts/:id',
        component: PostIdPage,
        // end: true
    },

]
