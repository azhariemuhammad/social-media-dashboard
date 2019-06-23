import React from 'react'
import {Card} from 'semantic-ui-react'
import {Link} from "react-router-dom";

const CardLinkCard = ({post, path}) => {
    return (
        <div style={{width: '614px'}}>
            <Link to={`/${path}/${post.id}`}>
                < Card
                    meta={post.title}
                    description={post.body}
                />
            </Link>
        </div>
    )
}

export default CardLinkCard
