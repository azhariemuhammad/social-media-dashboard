import React from 'react'
import {Modal, Container, Card} from 'semantic-ui-react'


const ModalForm = (props) => (
    <div>
        <Modal.Header>Edit Posts</Modal.Header>
        <Modal.Content>
            <Container>
                <Card.Content>
                    {props.content}
                </Card.Content>
            </Container>
        </Modal.Content>
    </div>
)

export default ModalForm
