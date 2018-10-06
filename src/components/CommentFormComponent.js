import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, Button, Row, Label, FormGroup, FormFeedback} from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';



const required = (val) => val && val.length;
const minLength = (len) => (val) => (val) && (val.length > len);

class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        }  
        
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen : !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
        
    }



    render() {

        return (
            <div> 
                <div className="mt-2">           
                    <Button outline onClick= {this.toggleModal}>
                        <span className="fa fa-pencil fa-lg"></span> Submit Comment
                    </Button>
                </div>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}> Submit Comment </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" id="rating" name="rating"
                                    className = "form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="name"> Your Name </Label>
                                <Control.text model=".name" id="name" 
                                    placeholder="Your Name" className="form-control"
                                    validators= {{ required, minLength: minLength(2) }} />
                                <Errors
                                    className="text-danger"
                                    model=".name"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters'
                                    }}
                                />   
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="comment"> Comment </Label>
                                <Control.textarea model=".comment" id="comment" name="comment"
                                    rows="6" className="form-control" />
                            </FormGroup>
                            
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            

                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }

}

export default Comment;