import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'reactstrap';
import Select from 'react-select';
import axios from 'axios';
import Profiles from "./Profiles";

class Home extends Component {

   render() {
      return (
         <div>
            <br></br>
            <Row>
               <Col sm={2} >
               </Col>
               <Col sm={8} >
                  <div className="moviebg">
                     <Profiles></Profiles>
                  </div>
               </Col>
               <Col sm={2} >
               </Col>
            </Row>

         </div>
      );
   }
}

// const mapStateToProps = (state) => {
//    console.log("InMaptoProps in newsource");
//    console.log(state);
//    return {
//       generalVal: state.generalVal,
//       businessVal: state.businessVal,
//       sportsVal: state.sportsVal,
//       entertainmentVal: state.entertainmentVal
//    };

// };

export default ( Home );
