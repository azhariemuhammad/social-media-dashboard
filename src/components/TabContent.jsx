import React from 'react'
import {Card, Container, Form, Button} from 'semantic-ui-react'
import CardLinkCard from "./CardProfile";
import FormCompose from "./Form";

const TabContent = ({posts, title, compose}) => {
    return (
        <div style={{width: '614px'}}>
            <Container>
                <Card.Content>
                    <Card.Header>Your {title}</Card.Header>
                    {compose && <FormCompose title={'post'}/>}
                    {
                        posts &&
                        posts.map((post, idx) => {
                            return (
                                <CardLinkCard key={idx} post={post} path={title}/>
                            )
                        })
                    }
                </Card.Content>
            </Container>
        </div>


    )
}

export default TabContent
