import React, { Component } from 'react';
import { connect } from "react-redux";
import { recommend } from "../actions/action.js"
import { Card, CardImg, CardSubtitle, CardTitle, CardText, CardBody, Row, Col, Button } from 'reactstrap';
import { GrLike, GrDislike } from "react-icons/gr";

class profile extends Component {

   // constructor(props) {
   //   super(props);
   //   this.state = {
   //   };
   // }
   render() {
      return (
         <div>
            <br></br>
            <Card style={{ backgroundColor: 'white' }}>
               <CardBody>
                  <Row>
                     <Col sm={3}>
                        <CardImg top width="100%" height="150"
                           src={"https://www.pennydia.com/attachments/communityimages/" + this.props.data.communityimage}
                           alt="Card image cap" />
                     </Col>
                     <Col sm={3}>
                        <CardTitle style={{ color: 'black' }}>{this.props.data.communityname}</CardTitle>
                     </Col>
                     <Col sm={4}></Col>
                  </Row>
                  <CardSubtitle tag="h6" className="mb-2 text-muted "  >
                     {this.props.data.communityabout}
                  </CardSubtitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted "  >
                     {
                        this.props.data.status == "1" ? <p>InProgress</p> : <p>Completed</p>
                     }
                  </CardSubtitle>
               </CardBody>
            </Card>
         </div>
      );
   }
}

export default connect( null, { recommend } )( profile );
