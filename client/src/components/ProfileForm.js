import React from "react";
import axios from "axios";
import { Form, } from "semantic-ui-react";
import { useFormInput, } from "../hooks/useFormInput";
import {DateInput,TimeInput,DateTimeInput,DatesRangeInput} from 'semantic-ui-calendar-react';


const ProfileForm = (props) => {
  const nickname = useFormInput("");
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
  const superhero = useFormInput("");
  const alumni = useFormInput("");
  const constellation = useFormInput("");

  const handleSubmit = (e) => {
  e.preventDefault();
  axios.post(`/api/blogs`, { nickname: nickname.value, bio: bio.value, 
    relationship: relationship.value, current_city: current_city.value,
    hometown: hometown.value, job_title: job_title.value, fav_quote: fav_quote.value,
    fav_book: fav_book.value, fav_movie: fav_movie.value, spirit_animal: spirit_animal.value,})

    .then( res => {
      props.add(res.data);
      props.toggleForm();
    })
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {/* <Form.Group widths="equal"> */}
          <Form.Input
            label="Nickname"
            placeholder="Nickname"
            name="nickname"
            required
            { ...nickname }
          />
        {/* </Form.Group>  
        <Form.Group> */}
          <Form.Input
            label="Bio"
            placeholder="Bio"
            name="bio"
            { ...bio }
          />
          <Form.Input
            label="Gender"
            placeholder="Female/ Male/ Genderqueer/ Nonbinary/ ..."
            name="gender"
            { ...gender }
          />
          <Form.Input
            label="Relationship"
            placeholder="Relationship"
            name="relationship"
            { ...relationship }
          />
          <Form.Input
            label="Current City"
            placeholder="Current City"
            name="Current City"
            { ...current_city }
          />
          <Form.Input
            label="Hometown"
            placeholder="Hometown"
            name="hometown"
            { ...hometown }
          />
          <Form.Input
            label="Job Title"
            placeholder="Job Title"
            name="job title"
            { ...job_title }
          />
          <Form.Input
            label="Favorite Quote"
            placeholder="Favorite Quote"
            name="favorite quote"
            { ...fav_quote }
          />
          <Form.Input
            label="Favorite Book"
            placeholder="Favorite Book"
            name="favorite book"
            { ...fav_book }
          />
          <Form.Input
            label="Favorite Movie"
            placeholder="Favorite Movie"
            name="favorite movie"
            { ...fav_movie }
          />
          <Form.Input
            label="Spirit Animal"
            placeholder="Spirit Animal"
            name="spirit animal"
            { ...spirit_animal }
          />
        {/* </Form.Group> */}
        <Form.Button color="blue" inverted>Submit</Form.Button>
      </Form>
      <br/>
    </>
  );
};

export default ProfileForm;