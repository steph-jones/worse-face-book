import React, { Component, useContext, useState, useEffect } from "react";
import axios from "axios";
import { List, Header, Segment, Container, Button, } from "semantic-ui-react";
import ProfileForm from "./ProfileForm"
import {AuthContext,} from "../../providers/AuthProvider.js"

const MyProfile = (props) => {
  const [profile, setProfile] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const auth = useContext(AuthContext)


  useEffect( () => {
    axios.get(`/api/my_profile`)
    .then( res => // {debugger} 
      {setProfile(res.data)}
    )
    .catch(err => {debugger})
  },[]);
  
  // const addProfile = (profile) => setProfile([ ...profiles, profile, ]);
  
  const renderMyProfile = () => { // debugger;
      return (//profiles.map( profile => 
          <Segment key={profile.id}>
              <List.Header as="h3">{profile.name}</List.Header>
              <List.Description>
                  { profile.bio }
              </List.Description>
          </Segment>
      );
  };

  return(
      <>
          <br/>
          <Header as="h1" centered>My Profile</Header>
          <br/>
          <Header as="h3">Edit My Profile</Header>
          {/* {showForm && <ProfileForm toggleForm={setShowForm} add={addProfile}/>} */}
          <Button inverted color="orange" onClick={() => setShowForm(!showForm)}>
            {showForm ? "Close Form" : "Show Form"}
          </Button>
          <br/>
          <Header as="h4">My Profile View</Header>
          <List>
              { renderMyProfile() }
          </List>
      </>
  );
};

export default MyProfile;