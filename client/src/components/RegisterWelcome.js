import React, { Component, useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, Segment, Header, } from 'semantic-ui-react';
import { useFormInput } from '../hooks/useFormInput';
import {AuthContext,} from "../providers/AuthProvider.js";
import { Link, withRouter, } from 'react-router-dom';
import ConnectedFetchUser from "./FetchUser";

const RegisterWelcome = (props) => {
  const [profile, setProfile] = useState([]);
  const auth = useContext(AuthContext)
  // state = { bio: '', nickname: '', current_city: '', image: '', relationship: '', 
  // birthday: '', hometown: '', job_title: '', fav_book: '', fav_movie: '', gender: '',
  // fav_quote: '', spirit_animal: '', alumni: '' }
  
  const name = useFormInput("")
  const nickname = useFormInput("");
  const email = useFormInput("");
  const bio = useFormInput("");
  const image = useFormInput("");
  const relationship = useFormInput("");
  const birthday = useFormInput("");
  const current_city = useFormInput("");
  const hometown = useFormInput("");
  const job_title = useFormInput("");
  const fav_quote = useFormInput("");
  const fav_book = useFormInput("");
  const fav_movie = useFormInput("");
  const spirit_animal = useFormInput("");
  const gender = useFormInput("");
  // const superhero = useFormInput("");
  const alumni = useFormInput("");
  // const constellation = useFormInput("");

  useEffect( (auth) => { 
    axios.get(`/api/profile/${props.auth.user.id}`) // ${props.match.params.id}
    .then( res => //{debugger} 
      {setProfile(res.data)} 
    )
    .catch(err => 
      console.log(err))
  },[]);

  const handleSubmit = withRouter(history,props,auth) => {
    // e.preventDefault();
    // const {id} = props.match.params
    // const { auth: history, } = this.props;
    // handleRegister({ email, name, password, passwordConfirmation, }, history);
    
    axios.put(`/api/profile/${profile.id}`,  //${props.state.user.id}
        { email: email.value, name: name.value, nickname: nickname.value, bio: bio.value, 
        relationship: relationship.value, current_city: current_city.value, gender: gender.value,
        hometown: hometown.value, job_title: job_title.value, alumni: alumni.value, fav_quote: fav_quote.value,
        fav_book: fav_book.value, fav_movie: fav_movie.value, spirit_animal: spirit_animal.value,}) // find out where params 
      .then( res => {
        // debugger
        setProfile({profile: res.data});
        // props.toggleForm();
        context.history.push("/");
      })
      .catch( err => {
        console.log(err);
      })
  };

    // const { bio, nickname, current_city, image, relationship, gender, birthday, hometown, job_title, 
    //   fav_book, fav_movie, fav_quote, spirit_animal, alumni } = this.state;
      
    const genderOptions = ["Female", "Male", "Nonbinary", "Genderqueer", "Other", "Not Specified"];
    const relationshipOptions = ["Single", "Married", "In a Relationship", "Engaged", "It's Complicated", "Widow", "Widower", "Not Specified"]
  
    
    return (
      <ConnectedFetchUser>
      <Segment basic>
        <Segment inverted color='green' tertiary> 
          <Header as='h1' textAlign='center' color="white">Welcome !</Header>
          <Header as='h3' textAlign='center' color="white">Lets add some more information to your profile:</Header>
        </Segment>
        <Form onSubmit={handleSubmit}>
        {/* <Form.Group widths="equal"> */}
          <Form.Input
            label="Name"
            placeholder={profile.name}
            name="name"
            required
            { ...name }
          />
          <Form.Input
            label="Nickname"
            placeholder="none"
            name="nickname"
            { ...nickname }
          />
          <Form.Input
            label="Bio"
            placeholder={bio.value}
            name="bio"
            required
            { ...bio }
          />
          <Form.Input
            label="Email"
            placeholder={profile.email}
            name="email"
            required
            { ...email }
          />
          <Form.Select
            label="Gender"
            placeholder={gender.value}
            options={genderOptions}
            name="gender"
            { ...gender }
          />
          <Form.Select
            label="Relationship"
            placeholder={relationship.value}
            options={relationshipOptions}
            name="relationship"
            { ...relationship }
          />
          <Form.Input
            label="Birthday"
            placeholder={birthday.value}
            name="birthday"
            { ...birthday }
          />
          <Form.Input
            label="Hometown"
            placeholder={hometown.value}
            name="hometown"
            { ...hometown }
          />
          <Form.Input
            label="Current City"
            placeholder={current_city.value}
            name="Current_City"
            required
            { ...current_city }
          />
          <Form.Input
            label="Job Title"
            placeholder={job_title.value}
            name="job_title"
            { ...job_title }
          />
          <Form.Input
            label="University Alumni"
            placeholder={alumni.value}
            name="alumni"
            { ...alumni }
          />
          <Form.Input
            label="Favorite Movie"
            placeholder={fav_movie.value}
            name="fav_movie"
            { ...fav_movie }
          />
          <Form.Input
            label="Favorite Book"
            placeholder={fav_book.value}
            name="fav_book"
            { ...fav_book }
          />
          <Form.Input
            label="Favorite Quote"
            placeholder={fav_quote.value ? fav_quote.value : "null"}
            name="fav_quote"
            { ...fav_quote }
          />
          <Form.Input
            label="Spirit Animal"
            placeholder={spirit_animal.value}
            name="spirit_animal"
            { ...spirit_animal }
          />
          <Segment textAlign='center' basic>
            <Button primary type='submit' icon='right arrow'>Next Step!</Button>
          </Segment>
        </Form>
      </Segment>
    </ConnectedFetchUser>
  )
};


const ConnectedRegisterWelcome = (props) => (
    <AuthConsumer>
        { auth => 
            <RegisterWelcome { ...props } auth={auth} /> 
        }
    </AuthConsumer>
);


export default ConnectedRegisterWelcome;