import React from 'react';
import axios from 'axios';
import { Card, Divider, Image, } from 'semantic-ui-react';

class MyFriends extends React.Component {
  state = { friends: [], };

  componentDidMount() {
    axios.get('/api/my_friends')
      .then( res => this.setState({ friends: res.data, }) );
  }

  render() {
    const { friends, } = this.state;
    return (
      <Card.Group itemsPerRow={4}>
        { friends.map( friend =>
          <Card key={friend.id}>
            <Image src={friend.image} />
            <Card.Content>
            <Card.Header>
              { friend.name }
            </Card.Header>
            <Card.Description>
              { friend.bio }
            </Card.Description>
            <Card.Meta>
              { friend.gender }
            </Card.Meta>
          </Card.Content>
          </Card>
        )}
      </Card.Group>
    )
  }
}

export default MyFriends;