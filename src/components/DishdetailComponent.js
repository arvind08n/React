import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

class DishDetail extends Component{
    renderComments=(comments)=>{
        if(comments!=null){
            const comm=comments.map(c => {
                return(
                    <React.Fragment>
                        <li>{c.comment}</li><br/>
                        <li>-- {c.author}, {this.dateFormat(c.date)}</li><br/>
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

    renderDish=(dish)=>{
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
                        {this.renderComments(dish.comments)}    
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

    dateFormat(date){
        const op={year: 'numeric', month: 'short', day: 'numeric'}
        const d=new Date(date)
        return d.toLocaleDateString("en-US",op);
    }

    render(){
        const {dish}=this.props;
        return(
            <div className="container">
                <div className="row">
                    {this.renderDish(dish)}
                </div>
            </div>
        );
    }
}

export default DishDetail;