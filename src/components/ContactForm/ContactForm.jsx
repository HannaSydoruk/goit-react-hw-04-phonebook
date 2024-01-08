import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChangeHandler = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className={css['form-input']}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.onChangeHandler}
          placeholder="Name"
          id={nanoid()}
          required
        />
        <input
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.onChangeHandler}
          placeholder="Phone"
          id={nanoid()}
          required
        />
        <button type="submit" className={css['form-button']}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
