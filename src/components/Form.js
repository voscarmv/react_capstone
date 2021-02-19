import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addArticle } from '../actions/index';

// function mapDispatchToProps(dispatch) {
//   return {
//     addArticle: article => dispatch(addArticle(article)),
//   };
// }

const Form = () => {
  const dispatch = useDispatch();
  const [article, setArticle] = useState(
    {
      title: '',
    },
  );

  const handleChange = e => {
    setArticle(
      {
        title: e.target.value,
      },
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addArticle(article));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">
          Title
          <input
            type="text"
            id="title"
            value={article.title}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">SAVE</button>
    </form>
  );
};

export default Form;
