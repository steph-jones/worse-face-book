import React, { Component, useContext, useState, useEffect } from "react";
import axios from "axios";
import { Grid, Card, Image, Icon, List, Header, Segment, Container, Button, } from "semantic-ui-react";
import ProfileForm from "./ProfileForm"
import {AuthContext,} from "../../providers/AuthProvider.js"

const MyProfile = (props) => {
  const [profile, setProfile] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showProfile, setShowProfile] = useState(true);
  const auth = useContext(AuthContext)


  useEffect( () => {
    axios.get(`/api/my_profile`)
    .then( res => // {debugger} 
      {setProfile(res.data)}
    )
    .catch(err => {debugger})
  },[]);
  
  const ProfileCard = () => (
    <Card key={ profile.id} color="blue">
      <Image src={ profile.image } wrapped ui={false} />
      <Card.Content>
        <Card.Header color="blue" >{ profile.name}</Card.Header>
        <Card.Meta>
          <span className='date'> ** Joined in date ** </span>
        </Card.Meta>
        <Card.Description>
          { profile.bio }
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          # friends here
        </a>
      </Card.Content>
    </Card>
  )
  // const addProfile = (profile) => setProfile([ ...profiles, profile, ]);
  
  const RenderMyProfile = () => { // debugger;
      return (//profiles.map( profile => 
          <Segment color="blue" key={profile.id}>
            <List>
              <List.Item>
                <List.Header>Bio</List.Header>
                { profile.bio }
                <hr color="lightblue"/>
              </List.Item>
              <List.Item>
                <List.Header>Email</List.Header>
                { profile.email }
                <hr color="lightblue"/>
              </List.Item>
              <List.Item>
                <List.Header>Relationship</List.Header>
                { profile.relationship }
                <hr color="lightblue"/>
              </List.Item>
              <List.Item>
                <List.Header>Birthday</List.Header>
                { profile.birthday }
                <hr color="lightblue"/>
              </List.Item>
              <List.Item>
                <List.Header>Hometown</List.Header>
                { profile.hometown }
                <hr color="lightblue"/>
              </List.Item>
              <List.Item>
                <List.Header>Current City</List.Header>
                { profile.current_city }
                <hr color="lightblue"/>
              </List.Item>
              <List.Item>
                <List.Header>Job Title</List.Header>
                { profile.job_title }
                <hr color="lightblue"/>
              </List.Item>
              <List.Item>
                <List.Header>University Alumni</List.Header>
                { profile.alumni }
                <hr color="lightblue"/>
              </List.Item>
              <List.Item>
                <List.Header>Favorite Movie</List.Header>
                { profile.fav_movie }
                <hr color="lightblue"/>
              </List.Item>
              <List.Item>
                <List.Header>Favorite Book</List.Header>
                { profile.fav_book }
                <hr color="lightblue"/>
              </List.Item>
              <List.Item>
                <List.Header>Favorite Quote</List.Header>
                { profile.fav_quote }
                <hr color="lightblue"/>
              </List.Item>
              <List.Item>
                <List.Header>Spirit Animal</List.Header>
                { profile.spirit_animal }
                <hr color="lightblue"/>
              </List.Item>
            </List>
          </Segment>
      );
  };

  const HandleClick = () => {
    setShowForm(!showForm)
    setShowProfile(!showProfile)
  }

  return(
    <Container centered>
      <br/>
      <Header as="h1" textAlign="centered" >My Profile</Header>
      {/* <Header as="h3" color="blue">{profile.name}</Header> */}
      {/* { ProfileCard() } */}
      {/* <List> */}
      {/* { renderMyProfile() } */}
      {/* </List> */}
      {/* <Header as="h3" color="red">Edit My Profile</Header> */}
      <Grid>
        <Grid.Column width={4}>
          { ProfileCard() }
          <Button inverted color="red" onClick={() => HandleClick()}>
            {(showForm && showProfile) ? "Save Changes" : "Edit My Profile"}
          </Button>
        </Grid.Column>
        <Grid.Column width={9}>
          {showProfile && <RenderMyProfile toggleForm={setShowProfile} />} 
          {showForm && <ProfileForm toggleForm={setShowForm} />} 
        </Grid.Column>
      </Grid>
           
    </Container>
  );
};

export default MyProfile;