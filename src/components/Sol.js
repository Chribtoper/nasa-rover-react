import React from 'react';
import { List, Segment, Card, Icon, Image } from 'semantic-ui-react';
import '../stylesheets/Sol.css';

const Sol = () => {

  return (
    <Segment>
      <h2 className="header">Sol {"THE CURRENT SOL PLEASE"}</h2>
      <Image src={"https://image4.owler.com/logo/the-flatiron-school_owler_20160226_213942_original.png"} />
      <Card>
        <Card.Content>
          <Card.Meta>CAMERA: {"WHAT CAMERA IS THIS?"}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a>STATUS: {"WHATS THE CURRENT STATUS?"}</a>
        </Card.Content>
      </Card>
    </Segment>
  )
}

export default Sol;
