import React from 'react';
import { List, Segment, Card, Icon, Image } from 'semantic-ui-react';
import '../stylesheets/Sol.css';

const Sol = ({currentSol}) => {

  return (
    <Segment>
      <h2 className="header">Sol {currentSol.sol}</h2>
      <Image src={currentSol.data.imgUrl} />
      <Card>
        <Card.Content>
          <Card.Meta>CAMERA: {currentSol.data.camera}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a>STATUS: {currentSol.data.status}</a>
        </Card.Content>
      </Card>
    </Segment>
  )
}

export default Sol;
