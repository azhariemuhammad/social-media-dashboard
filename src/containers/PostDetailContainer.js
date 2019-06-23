import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';



import {baseService} from '../services'
import Comments from "../components/Comments";
import {Card} from "semantic-ui-react";
import * as actionsPosts from "../actions/postsAction";
import * as actionsComments from "../actions/commentsAction";
import commentReducer from "../reducers/commentsReducer";



class PostDetailContainer extends React.Component {

    componentWillMount() {
        const id = this.props.location.pathname.replace(/[^0-9\.]+/g, '');
        this.props.postsAction.getPostById(id);
        this.props.commentsAction.getCommentsById(id)
    }

    render() {
        return (
            <div>
                <Card.Content>
                    <Card.Header>{this.props.post.title}</Card.Header>
                </Card.Content>
                <Card.Content description={this.props.post.body} />
                <Card.Content extra>
                    <Comments comments={this.props.comments}/>
                </Card.Content>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        post: state.postReducer.selected,
        comments: state.commentReducer.comments
    };
};

const mapDispatchToProps = dispatch => {
    return {
        postsAction: bindActionCreators(actionsPosts, dispatch),
        commentsAction: bindActionCreators(actionsComments, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetailContainer))
