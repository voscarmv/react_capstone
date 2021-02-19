import React from 'react';
import { useSelector } from 'react-redux';

const List = () => {
  const articles = useSelector(state => state.articlesState.articles);
  return (
    <ul>
      {articles.map(
        element => (
          <li key={element.title}>{ element.title }</li>
        ),
      )}
    </ul>
  );
};

export default List;
