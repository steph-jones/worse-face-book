import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Icon, Image, List, Header, Grid, Segment, Button } from "semantic-ui-react";
import ProfileForm from "./ProfileForm"

const Profiles = (props) => {
  const [profiles, setProfiles] = useState([]);
  const [showForm, setShowForm] = useState(false);


  useEffect( () => {
    axios.get(`/api/profile`)
    // debugger
    .then( res => {setProfiles(res.data)}
    );
  }, []);
  
  const addProfile = (profile) => setProfiles([ ...profiles, profile, ]);
  
  const renderProfiles = () => { // debugger;
      return (
    <Grid >
        <Grid.Row columns={3}>
            
            { profiles.map( profile => 
                <Grid.Column width={4}>
                    <Segment padded="small" vertical>
                    <Link to={`/profile/${profile.id}`}>
                    <Card link={`/profile/${profile.id}`} color="blue">
                        <Image src={ profile.image } wrapped ui={false}/> 
                        <Card.Content>
                            <Card.Header color="blue" >{ profile.name}</Card.Header>
                            <Card.Meta>
                            <span className='date'> Joined in { profile.year_joined } </span>
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
                    </Link>
                    </Segment>
                </Grid.Column>
            )}
        </Grid.Row>
        </Grid>
      );
  };

  return(
      <>
          <br/>
          <Segment raised textAlign="center" inverted color='blue' tertiary>
            <Header as="h1" textAlign="centered" color="white">All User's Profile Pages</Header>
            </Segment>
          <br/>
          {/* <List> */}
            { renderProfiles() }
          {/* </List> */}
      </>
  );
};


export default Profiles;