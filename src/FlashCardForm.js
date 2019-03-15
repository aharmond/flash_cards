import React from 'react';
import { Form } from 'semantic-ui-react';

class FlashCardForm extends React.Component {
  state = { term: "", answer: "", };

  componentDidMount() {
    if (this.props.id) {
      debugger
      this.setState({ term: this.props.term, answer: this.props.answer })
    }
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value, });

  handleSubmit = (e) => {
    e.preventDefault();
    debugger
    if (this.props.id) {
      this.props.edit({id: this.props.id, ...this.state})
      this.props.toggleEdit()
    } else {
      this.props.add(this.state)
    }
    this.setState({ term: "", answer: "", })
  };

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