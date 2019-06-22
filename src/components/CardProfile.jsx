import React from 'react'
import {Card} from 'semantic-ui-react'

const CardLinkCard = ({post}) => {
    return (
        < Card
            meta={post.title}
            description={post.body}
        />


    )
}

export default CardLinkCard
