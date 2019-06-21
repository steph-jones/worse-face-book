import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Icon, Image, List, Header, Grid, Segment, Button } from "semantic-ui-react";
import ProfileForm from "./ProfileForm"

const AddFriends = (props) => {
  const [profiles, setProfiles] = useState([]);
  const [friends, setFriends] = useState([]);
  const [showForm, setShowForm] = useState(false);


  useEffect( () => {
    axios.get(`/api/profile`)
    // debugger
    .then( res => {setProfiles(res.data)}
    );
  }, []);
  
  const AddClick = (id) => {
    axios.put(`/api/list/${id}`)
    .then( () => setFriends(friends.filter( c => c.id !== id)) )
  };

  const renderProfiles = () => { // debugger;
      return (
    <Grid >
        <Grid.Row columns={3}>
            
            { profiles.map( profile => 
                <Grid.Column width={4}>
                    <Segment padded="small" vertical>
                    <Card color="blue" onclick={AddClick()}>
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
          <Header as="h1">All User's Profile Pages</Header>
          <br/>
          {/* <List> */}
            { renderProfiles() }
          {/* </List> */}
      </>
  );
};


export default AddFriends;