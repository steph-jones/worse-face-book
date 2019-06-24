import React from 'react';
import axios from "axios";
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, Segment, Header, } from 'semantic-ui-react';
import { useFormInput } from '../hooks/useFormInput'

const RegisterWelcome = (props) => {
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


  const handleSubmit = (history,e) => {
    // e.preventDefault();
    const {id} = props.match.params
    // const { auth: history, } = this.props;
    // handleRegister({ email, name, password, passwordConfirmation, }, history);
    
    axios.post(`/api/profile/65`,  
        { email: email.value, name: name.value, nickname: nickname.value, bio: bio.value, 
        relationship: relationship.value, current_city: current_city.value, gender: gender.value,
        hometown: hometown.value, job_title: job_title.value, alumni: alumni.value, fav_quote: fav_quote.value,
        fav_book: fav_book.value, fav_movie: fav_movie.value, spirit_animal: spirit_animal.value,}) // find out where params 
      .then( res => {
        // debugger
        props.add(res.data)
        history.push("/");
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
      <Segment basic>
        <Segment inverted color='green' tertiary> 
          <Header as='h1' textAlign='center' color="white">Welcome !</Header>
          <Header as='h3' textAlign='center' color="white">Lets add some more information to your profile:</Header>
        </Segment>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Nickname"
            name="nickname"
            value={nickname}
            placeholder={nickname ? nickname : "null"}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Bio"
            name="bio"
            value={bio}
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
            name="birthday"
            value={birthday}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Hometown"
            name="hometown"
            value={hometown}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Current City"
            name="current_city"
            value={current_city}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Job Title"
            name="job_title"
            value={job_title}
            onChange={this.handleChange}
          />
          <Form.Input
            label="University Alumni"
            name="alumni"
            value={alumni}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Favorite Movie"
            name="fav_movie"
            value={fav_movie}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Favorite Book"
            name="fav_book"
            value={fav_book}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Favorite Quote"
            name="fav_quote"
            value={fav_quote}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Spirit Animal"
            name="spirit_animal"
            value={spirit_animal}
            onChange={this.handleChange}
          />
          <Segment textAlign='center' basic>
            <Button primary type='submit' icon='right arrow'>Next Step!</Button>
          </Segment>
        </Form>
      </Segment>
  )
};


// const ConnectedRegisterWelcome = (props) => (
//     <AuthConsumer>
//         { auth => 
//             <RegisterWelcome { ...props } auth={auth} /> 
//         }
//     </AuthConsumer>
// );


export default RegisterWelcome;