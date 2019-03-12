import React from 'react';
import { Card, Button, Form, } from 'semantic-ui-react';

class FlashCard extends React.Component  { 
  state = { side: true, edit: false, term: this.props.flashcard.term, answer: this.props.flashcard.answer, correct: false }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editCard(this.props.flashcard.id, this.state.term, this.state.answer)
    this.setState({ edit: false, term: this.props.flashcard.term, answer: this.props.flashcard.answer })
  }

  toggleCorrect = () => this.setState({ correct: !this.state.correct})

  toggleEdit = () => this.setState({ edit: !this.state.edit, });

  toggleSide = () => this.setState({ side: !this.state.side, });

  render() {  
    const { remove, flashcard } = this.props
    const {term, answer, id} = flashcard

    return (
      <Card fluid>
        { this.state.edit ?
          <Card.Content>
            <Form size='mini' onSubmit={this.handleSubmit}>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Term"
                  placeholder="Term"
                  name="term"
                  value={this.state.term}
                  onChange={this.handleChange}
                  />
                <Form.Input
                  fluid
                  label="Answer"
                  placeholder="Answer"
                  name="answer"
                  value={this.state.answer}
                  onChange={this.handleChange}
                  />
              </Form.Group>
              <Form.Button>Submit</Form.Button>
            </Form>
          </Card.Content>
        :
          <Card.Content onClick={this.toggleSide}>  
            { this.state.side ? <Card.Header>{term}</Card.Header> : <Card.Header>{answer}</Card.Header>}
          </Card.Content>
        }
        <Card.Content extra>
          <div className="ui three buttons">
            <Button basic color="yellow" onClick={this.toggleEdit}>Edit</Button>
            <Button basic color="red" onClick={() => remove(id)}>Delete</Button>
            { this.state.correct ? 
              <Button basic color="pink" onClick={this.toggleCorrect}>Correct!</Button>
            :
              <Button basic color="purple" onClick={this.toggleCorrect}>Correct?</Button>
            }
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default FlashCard;