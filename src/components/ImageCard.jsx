import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const ImageCard = ({photo}) => {
    return (
        <Card>
            <Image src={photo.url} wrapped ui={false}/>
            <Card.Content>
                <Card.Header>{photo.title}</Card.Header>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='user'/>
                    10 Friends
                </a>
            </Card.Content>
        </Card>
    )
}

export default ImageCard
