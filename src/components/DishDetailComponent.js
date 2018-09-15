import React, { Component } from 'react';
import {Card, CardImg, CardText, CardImgOverlay, CardBody, CardTitle} from 'reactstrap';
import {ListGroup, ListGroupItem} from 'reactstrap';

class DishDetail extends Component{

    constructor(props){
        super(props);
    }

     componentDidMount() {
        console.log('DishDetail Component componentDidMount invoked');
     }

     componentDidUpdate() {
         console.log('DisheDetail Componentdidupdate invoked');
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
                    {dish.comments.map((review)=>{
                        return(
                        <ListGroup key={review.id}>
                            <ListGroupItem>{review.comment}</ListGroupItem>
                            <ListGroupItem>--{review.author}, {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(review.date)))}</ListGroupItem>
                        </ListGroup>
                        );
                    })}           
             </div>);
        }   
        else{
            return(
                <div></div>
            );
        }

    }

    render(){

        console.log('DishDetail Component render method invoked');
        const dishdetail = this.props.dish; 
        
        return(
            <div className="container">
                <div className="row">
                    {this.renderDish(dishdetail)}
                    {this.renderComments(dishdetail)}
                </div>
            </div>
        );
    }
}

export {DishDetail};