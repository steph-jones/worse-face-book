import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { List, Form, Header, Segment, Button, } from "semantic-ui-react";
import ProfileForm from "./ProfileForm"
import {AuthContext,} from "../../providers/AuthProvider.js"

class ProfileEdit extends React.Component {
    state = { 
      name: this.props.name, 
      nickname: this.props.nickname, 
      bio: this.props.bio,
      email: this.props.email,
      gender: this.props.gender,
      relationship: this.props.relationship,
      birthday: this.props.birthday,
      hometown: this.props.hometown,
      current_city: this.props.current_city,
      job_title: this.props.job_title,
      alumni: this.props.alumni,
      fav_book: this.props.fav_book,
      fav_movie: this.props.fav_movie,
      fav_quote: this.props.fav_quote,
      spirit_animal: this.props.spirit_animal,
      updateProfile: (profile) => this.updateProfile(profile),
    };
  
    updateProfile = (profile) => {
      this.setState({ ...profile, });
    };
    
    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value, })
    };
    
    handleSubmit = (e) => {
      e.preventDefault(); 
      const profile = { ...this.state, };
      this.props.updateProfile(profile);
    }
    
    render() {
      const { name, nickname, bio, email, gender, relationship, birthday, 
        hometown, current_city, job_title, alumni, fav_book, fav_movie, 
        fav_quote, spirit_animal } = this.state;
      return (
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Name"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
          />
          <Form.Input
            label="Nickname"
            type="text"
            name="nickname"
            value={nickname}
            placeholder={nickname ? nickname : "null"}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Bio"
            type="text"
            name="bio"
            value={bio}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <Form.Select
            label="Gender"
            name="gender"
            value={gender}
            onChange={this.handleChange}
            options={genderOptions}
          />
          <Form.Select
            label="Relationship Status"
            name="relationship"
            value={relationship}
            onChange={this.handleChange}
            options={relationshipOptions}
          />
          <Form.Input
            label="Birthday"
            type="text"
            name="birthday"
            value={birthday}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Hometown"
            type="text"
            name="hometown"
            value={hometown}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Current City"
            type="text"
            name="current_city"
            value={current_city}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Job Title"
            type="text"
            name="job_title"
            value={job_title}
            onChange={this.handleChange}
          />
          <Form.Input
            label="University Alumni"
            type="text"
            name="alumni"
            value={alumni}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Favorite Movie"
            type="text"
            name="fav_movie"
            value={fav_movie}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Favorite Book"
            type="text"
            name="fav_book"
            value={fav_book}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Favorite Quote"
            type="text"
            name="fav_quote"
            value={fav_quote}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Spirit Animal"
            type="text"
            name="spirit_animal"
            value={spirit_animal}
            onChange={this.handleChange}
          />
          <Form.Button color="blue">Save</Form.Button>
        </Form>
      )
    }
  }
  
  const genderOptions = ["Female", "Male", "Nonbinary", "Genderqueer", "Other", "Not Specified"];
  const relationshipOptions = ["Single", "Married", "In a Relationship", "Engaged", "It's Complicated", "Widow", "Widower", "Not Specified"]
  
  const ConnectedProfileEdit = (props) => {
    return (
      <AuthContext>
        { value => (
          <ProfileEdit 
            { ...props }
            updateProfile={value.updateProfile}
            email={value.email}
            name={value.name}
            nickname={value.nickname}
            bio={value.bio}
            relationship={value.relationship}
            current_city={value.current_city}
            hometown={value.hometown}
            gender={value.gender}
            birthday={value.birthday}
            job_title={value.job_title}
            fav_book={value.fav_book}
            fav_movie={value.fav_movie}
            fav_quote={value.fav_quote}
            spirit_animal={value.spirit_animal}
          />
        )}
      </AuthContext>
    )
  }
  
  export default ConnectedProfileEdit;