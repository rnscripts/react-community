import React, { Component } from 'react';
import { Card, CardImg, CardSubtitle, CardTitle, CardText, CardBody, Row, Col, Button } from 'reactstrap';
import userData from '../userData/user.json'
import Profile from './Profile';

class Profiles extends Component {

   constructor( props ) {
      super( props );
      this.state = {
         profileData: []
      }
   }

   render() {

      return (
         <div style={{ color: "white" }}>
          
            {
               userData.map( user => {
                  return (
                     <Profile data={user} ></Profile>
                  );
               } )
            }
         </div>
      );
   }
}

export default Profiles;