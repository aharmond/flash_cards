import React from 'react';
import FlashCardForm from './FlashCardForm';
import { Card, Button, } from 'semantic-ui-react';

class FlashCard extends React.Component  { 
  state = { side: true, edit: false, correct: false }

  toggleCorrect = () => this.setState({ correct: !this.state.correct})

  toggleEdit = () => this.setState({ edit: !this.state.edit, });

  toggleSide = () => this.setState({ side: !this.state.side, });

  render() {  
    const { removeCard, term, answer, id } = this.props

    return (
      <Card fluid>
        { 
          this.state.edit ?
            <FlashCardForm  id={id} { ...this.props } toggleEdit={this.toggleEdit} />
          :
            <Card.Content onClick={this.toggleSide}>  
              { 
                this.state.side ? 
                  <Card.Header >{term}</Card.Header> 
                : 
                  <Card.Header >{answer}</Card.Header>
              }
            </Card.Content>
        }
        <Card.Content extra>
          <div className="ui three buttons">
            <Button color="yellow" onClick={this.toggleEdit}>Edit</Button>
            <Button color="red" onClick={() => removeCard(id)}>Delete</Button>
            { this.state.correct ? 
              <Button color="pink" onClick={this.toggleCorrect}>Correct!</Button>
            :
              <Button color="purple" onClick={this.toggleCorrect}>Correct?</Button>
            }
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default FlashCard;