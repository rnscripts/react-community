import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand, Button, Row, Col } from 'reactstrap';
import image from '../images/logo.png'
import { GoHome, GoTasklist, } from "react-icons/go";
import { GiDiceSixFacesFour} from "react-icons/gi";
import {CgCalendarDates} from "react-icons/cg";
class Navigation extends Component {


   render() {
      const { } = this.props;
      return (
         <div>
            <Navbar color="dark">
               <NavbarBrand >
                  <Row>
                     <Col sm={2}>TODOS</Col>
                  </Row>
               </NavbarBrand>
               <Nav >
                  <NavItem>
                     <NavLink to="/" ><Button color="info" outline><GoHome/> Home</Button> </NavLink>
                     <NavLink to="/" ><Button color="info" outline><GoTasklist/> My Task</Button> </NavLink>
                     <NavLink to="/" ><Button color="info" outline> <GiDiceSixFacesFour/> Subscription</Button> </NavLink>
                     <NavLink to="/" ><Button color="info" outline><CgCalendarDates/> Calender</Button> </NavLink>
                     <NavLink to="/Settings"><Button color="info" outline> Sign in</Button> </NavLink>
                  </NavItem>
               </Nav>
            </Navbar>

         </div>
      );
   }
}

const mapStateToProps = ( state ) => {
   console.log( "InMaptoProps" );
   console.log( state );
   return {
      generalVal: state.generalVal,
      businessVal: state.businessVal,
      sportsVal: state.sportsVal,
      entertainmentVal: state.entertainmentVal
   };

};

export default connect( mapStateToProps, null )( Navigation );
