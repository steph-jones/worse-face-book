import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { List, Header, Segment, Button, } from "semantic-ui-react";
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
      return profiles.map( profile => 
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
          <Header as="h1">Profile Pages</Header>
          <br/>
          {showForm && <ProfileForm toggleForm={setShowForm} add={addProfile}/>}
          <Button inverted color="orange" onClick={() => setShowForm(!showForm)}>
              {showForm ? "Close Form" : "Show Form"}
          </Button>
          <List>
              { renderProfiles() }
          </List>
      </>
  );
};

// class Profiles extends Component {
//     state = { profiles: [], }

//     componentDidMount() {
//         axios.get("/api/profiles")
//         .then( res => {
//             this.setState({ profiles: res.data, });
//         });
//     };

//     renderProfiles = () => {
//         const { profiles, } = this.state;
//         return profiles.map( profile => 
//             <Segment key={profile.id}>
//                 <List.Header as="h3">{profile.name}</List.Header>
//                 <List.Description>
//                     { profile.bio }
//                 </List.Description>
//             </Segment>
//         );
//     };

//     render() {
//         return(
//             <>
//                 <Header as="h1">Profile Pages</Header>
//                 <br/>
//                 <List>
//                     { this.renderProfiles() }
//                 </List>
//             </>
//         );
//     };
// };

export default Profiles;