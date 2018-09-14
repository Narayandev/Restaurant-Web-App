import React, { Component } from 'react';
import {Card, CardImg, CardText, CardImgOverlay, CardBody, CardTitle} from 'reactstrap';
import {ListGroup, ListGroupItem} from 'reactstrap';

class DishDetail extends Component{

    constructor(props){
        super(props);

    }

    renderDish(dish){
        if(dish!=null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.description}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderComments(dish){

      
        if(dish!= null && dish.comments.length != 0){
            return(
                <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {dish.comments.map((review)=>(
                        <ListGroup>
                            <ListGroupItem key = {review.id}>{review.comment}</ListGroupItem>
                            <ListGroupItem key = {review.id}>--{review.author}, {new Date(Date.parse(review.date)).toString()}</ListGroupItem>
                        </ListGroup>
                    
                ))}           
             </div>);
        }   
        else{
            return(
                <div></div>
            );
        }

    }

    render(){

        const dishdetail = this.props.selectedDish; 
        
        return(
            <div className="row">
                {this.renderDish(dishdetail)}
                {this.renderComments(dishdetail)}
            </div>
        );
    }
}

export default DishDetail;