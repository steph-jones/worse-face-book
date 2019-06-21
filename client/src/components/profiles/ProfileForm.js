import React from "react";
import axios from "axios";
import { Form, } from "semantic-ui-react";
import { useFormInput, } from "../../hooks/useFormInput";
// import {DateInput,TimeInput,DateTimeInput,DatesRangeInput} from 'semantic-ui-calendar-react';


const ProfileForm = (props) => {
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
  const superhero = useFormInput("");
  const alumni = useFormInput("");
  const constellation = useFormInput("");

  const handleSubmit = (e) => {
  e.preventDefault();
  axios.post(`/api/my_profile`, { email: email.value, name: name.value, nickname: nickname.value, bio: bio.value, 
    relationship: relationship.value, current_city: current_city.value, gender: gender.value,
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
            label="Name"
            placeholder={name.value}
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
            placeholder={email.value}
            name="email"
            required
            { ...email }
          />
          <Form.Input
            label="Gender"
            placeholder={gender.value}
            name="gender"
            { ...gender }
          />
          <Form.Input
            label="Relationship"
            placeholder={relationship.value}
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
            name="Current City"
            required
            { ...current_city }
          />
          <Form.Input
            label="Job Title"
            placeholder={job_title.value}
            name="job title"
            { ...job_title }
          />
          <Form.Input
            label="University Alumni"
            placeholder={alumni.value}
            name="university alumni"
            { ...alumni }
          />
          <Form.Input
            label="Favorite Movie"
            placeholder={fav_movie.value}
            name="favorite movie"
            { ...fav_movie }
          />
          <Form.Input
            label="Favorite Book"
            placeholder={fav_book.value}
            name="favorite book"
            { ...fav_book }
          />
          <Form.Input
            label="Favorite Quote"
            placeholder={fav_quote.value ? fav_quote.value : "null"}
            name="favorite quote"
            { ...fav_quote }
          />
          <Form.Input
            label="Spirit Animal"
            placeholder={spirit_animal.value}
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