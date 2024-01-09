import css from './Filter.module.css';

const Filter = ({ onChangeFilter, filter }) => {
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
};

export default Filter;
