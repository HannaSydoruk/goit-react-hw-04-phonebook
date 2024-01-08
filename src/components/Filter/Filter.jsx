import { Component } from 'react';
import css from './Filter.module.css';

class Filter extends Component {
  render() {
    const onChangeFilter = this.props.onChangeFilter;
    const filter = this.props.filter;
    return (
      <>
        <p>Find contacts by name:</p>
        <input
          type="text"
          value={filter}
          name="keywords"
          placeholder="Enter Name here..."
          className={css['input-filter']}
          onChange={onChangeFilter}
        />
      </>
    );
  }
}

export default Filter;
