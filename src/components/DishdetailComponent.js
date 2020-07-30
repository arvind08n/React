import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

    function RenderDish({dish}){
        if(dish!=null){
            return(
                <React.Fragment>
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle><strong>{dish.name}</strong></CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                        <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                            <RenderComments comments={dish.comments}/>
                    </div>
                </React.Fragment>
            )
        }
        else{
            return(
                <div/>
            )
        }
    }

    function RenderComments({comments}){
        if(comments!=null){
            const comm=comments.map(c => {
                return(
                    <React.Fragment>
                        <li>{c.comment}</li><br/>
                        <li>-- {c.author}, {DateFormat(c.date)}</li><br/>
                    </React.Fragment>
                )
            });

            return(
                <ul className="list-unstyled">
                    {comm}
                </ul>
            )
        }

        else{
            return(
                <div/>
            );
        }
    }

    function DateFormat(date){
        const op={year: 'numeric', month: 'short', day: 'numeric'}
        const d=new Date(date)
        return d.toLocaleDateString("en-US",op);
    }

    const DishDetail=(props)=>{
        // const {dish}=props.dish;
        return(
            <div className="container">
                <div className="row">
                    {/* {this.renderDish(dish)} */}
                    <RenderDish dish={props.dish}/>
                    {/* <RenderComments comments={props.dish.comments}/> */}
                </div>
            </div>
        );
    }

export default DishDetail;