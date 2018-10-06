import React, { Component } from 'react';
import {Card, CardImg, CardText, CardImgOverlay, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {ListGroup, ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import Comment from './CommentFormComponent';



    function RenderDish({dish}){
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

    function RenderComments({comments}){

      
        if(comments.length != 0){
            return(
                <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map((review)=>{
                        return(
                        <ListGroup key={review.id}>
                            <ListGroupItem>{review.comment}</ListGroupItem>
                            <ListGroupItem>--{review.author}, {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(review.date)))}</ListGroupItem>
                        </ListGroup>
                        );
                    })}
                    <Comment />           
             </div>);
        }   
        else{
            return(
                <div></div>
            );
        }

    }

    const DishDetail = (props) => {
        
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish}/>
                    <RenderComments comments={props.comments}/>
                </div>
            </div>
        );
    }

export {DishDetail};