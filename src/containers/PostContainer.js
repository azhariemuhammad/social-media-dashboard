import React, {useState, useEffect} from 'react';
import {Card, Container} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom';


import {baseService} from '../services'
import CardLinkCard from "../components/CardProfile";
import UseChooseUser from "../customHooks";


const PostsContainer = (props) => {
    const [posts, setPosts] = useState([])
    const userId = props.location.pathname.replace('/', '');

    useEffect(() => {
        async function fetchPostsData() {
            const result = await baseService().getPostsByUserId(userId)

            console.log(result.data)
            setPosts(result.data)
        }

        fetchPostsData();
    }, userId)

    return (
        <div style={{width: '614px'}}>
            <Container>
                <Card.Content>
                    <Card.Header>Your Feeds</Card.Header>
                {
                    posts &&
                    posts.map((post, idx) => {
                        return (
                            <CardLinkCard key={idx} post={post}/>
                        )
                    })
                }
                </Card.Content>
            </Container>
        </div>
    )
}


export default withRouter(PostsContainer)
