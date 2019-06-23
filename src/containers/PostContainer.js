import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';


import {baseService} from '../services'
import TabContent from "../components/TabContent";
import UseForm from "../customHooks";


const PostsContainer = (props) => {
    const [posts, setPosts] = useState([])
    const {newPost, setNewPost} = UseForm()
    const userId = props.location.pathname.replace(/[^0-9\.]+/g, '');


    useEffect(() => {
        async function fetchPostsData() {
            const result = await baseService().getPostsByUserId(userId)
            console.log(setNewPost)
            setNewPost(result.data)
        }

        fetchPostsData();
    }, [])

    return (
        <TabContent posts={newPost} title={'Posts'} compose={true}/>
    )
}


export default withRouter(PostsContainer)
