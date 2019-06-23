import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';



import {baseService} from '../services'
import Comments from "../components/Comments";
import {Button, Card, Modal} from "semantic-ui-react";
import * as actionsPosts from "../actions/postsAction";
import * as actionsComments from "../actions/commentsAction";
import commentReducer from "../reducers/commentsReducer";
import ModalForm from "../components/Modal";
import FormCompose from "../components/Form";



class PostDetailContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            id: null
        }
    }
    componentWillMount() {
        const id = this.props.location.pathname.replace(/[^0-9\.]+/g, '')
        this.setState({id})
        this.props.postsAction.getPostById(id);
        this.props.commentsAction.getCommentsById(id)
    }

    setModal(val) {
        this.setState({modal: val})
    }

    async handleDelete() {
        const userId = localStorage.getItem('userId')
        await this.props.postsAction.deletePost(this.state.id)
        return this.props.history.push(`/${userId}`)
    }

    render() {
        return (
            <div>
                <Card.Content>
                    <Card.Header>{this.props.post.title}</Card.Header>
                </Card.Content>
                <Card.Content description={this.props.post.body} />
                <Card.Content extra>
                    <Button onClick={() => this.setModal(true)}>Edit</Button>
                    <Button onClick={() => this.handleDelete()}>Delete</Button>
                    <Modal open={this.state.modal}>
                        <ModalForm content={
                            <FormCompose isEdit={true}
                                         post={this.props.post}
                                         postId={this.state.id}
                                         handleModal={(val) => this.setModal(val)}
                            />}
                        />
                    </Modal>
                    <Comments comments={this.props.comments}/>
                </Card.Content>
            </div>
        )
    }

}

const mapStateToProps = state => {
    console.log(state.postReducer.posts)
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
