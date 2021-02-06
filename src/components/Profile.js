import React, { Component } from 'react';
import { connect } from "react-redux";
import { recommend } from "../actions/action.js"
import { Card, CardImg, CardSubtitle, CardTitle, CardText, CardBody, Row, Col, Button } from 'reactstrap';
import {BsDot } from "react-icons/bs";

class profile extends Component {


   render() {
      let date = this.props.data.created_date.split( " " )[0];
      console.log( date );

      return (
         <div>
            <br></br>
            <Card style={{ backgroundColor: 'white' }} >
               <CardBody>
                  <Row>
                     <Col sm={3}>
                        <CardImg top width="100%" height="80"
                           src={"https://www.pennydia.com/attachments/communityimages/" + this.props.data.communityimage}
                           alt="Card image cap" />
                     </Col>

                     <Col sm={9}>
                        <Row>
                           <Col sm={5}>
                              <CardTitle style={{ color: 'red' }}><b>{this.props.data.communityname}</b></CardTitle>
                           </Col>
                           <Col sm={3}></Col>
                           <Col sm={4}>
                              <CardSubtitle tag="h6" className="mb-2 text-muted dateaAlign" style={{ color: 'black' }}  >
                                 {date}
                              </CardSubtitle>
                           </Col>

                        </Row>
                        <Row>
                           <Col sm={4}>
                              <CardSubtitle tag="h6" className="mb-2 text-muted "  >
                                 {this.props.data.communityabout}
                              </CardSubtitle>
                           </Col>
                           <Col sm={4}></Col>
                           <Col sm={4}>
                              <CardTitle style={{ color: 'black' }} >
                                 {this.props.data.status == "1"
                                    ? <p className="align-1"><BsDot size={30}/>InProgress</p>
                                    : <p className="align-2"><BsDot size={30}/>Completed</p>
                                 }
                              </CardTitle>
                           </Col>
                        </Row>
                     </Col>

                  </Row>
                  <br></br>


               </CardBody>
            </Card>
         </div>
      );
   }
}

export default connect( null, { recommend } )( profile );
