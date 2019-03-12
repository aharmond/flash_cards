import React from 'react';
import { Form } from 'semantic-ui-react';

class FlashCardForm extends React.Component {
  state = { term: "", answer: "", };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value, });

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({ term: "", answer: "", })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input 
            label="Term"
            placeholder="Term"
            required
            name="term"
            value={this.state.term}
            onChange={this.handleChange}
            />
          <Form.Input
            label="Answer"
            placeholder="Answer"
            required
            name="answer"
            value={this.state.answer}
            onChange={this.handleChange}
            />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default FlashCardForm