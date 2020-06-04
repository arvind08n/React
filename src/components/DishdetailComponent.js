import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

class DishDetail extends Component{
    constructor(props){
        super(props);
    }

    renderComments(comments){
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

    dateFormat(date){
        const op={year: 'numeric', month: 'short', day: 'numeric'}
        const d=new Date(date)
        return d.toLocaleDateString("en-US",op);
    }

    render(){
        return(
            <React.Fragment>
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={this.props.selected.image} alt={this.props.selected.name}/>
                    <CardBody>
                        <CardTitle>{this.props.selected.name}</CardTitle>
                        <CardText>{this.props.selected.description}</CardText>
                    </CardBody>
                </Card>
            </div>

            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {this.renderComments(this.props.selected.comments)}    
            </div>
            </React.Fragment>
        );
    }
}

export default DishDetail;