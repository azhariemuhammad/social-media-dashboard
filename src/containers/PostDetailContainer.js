import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';


import {baseService} from '../services'
import TabContent from "../components/TabContent";
import Comments from "../components/Comments";
import {Card} from "semantic-ui-react";
import CardLinkCard from "../components/CardProfile";
import UseForm from "../customHooks";


const PostDetailContainer = (props) => {
    const [comments, setComments] = useState([])
    const [post, setPost] = useState([])
    const postId = props.location.pathname.replace(/[^0-9\.]+/g, '');

    useEffect(() => {
        async function fetchPostsData() {
            const resultPost = await baseService().getPostByPostId(postId)
            const resultComments = await baseService().getCommentsByPostId(postId)

            setPost(resultPost.data)
            setComments(resultComments.data)

        }

        fetchPostsData();
    }, postId)

    return (
        <div>
            <Card.Content>
                <Card.Header>{post.title}</Card.Header>
            </Card.Content>
            <Card.Content description={post.body} />
            <Card.Content extra>
                <Comments comments={comments}/>
            </Card.Content>
        </div>
    )
}


export default withRouter(PostDetailContainer)
