import React from 'react';
// import styled from 'styled-components';
import GlobalStyle from './globalStyle';

class RelatedItems extends React.PureComponent {
  render() {
    return (
      <>
        <GlobalStyle />
        <body>
          <h1>Welcome to the Dangerzone.</h1>
          <p> Long Live the Scrumdog Millionaires </p>
          <button type="submit"> Button Large </button>
          <button type="submit">the fluff button</button>
          <button type="submit">dangerous button</button>
        </body>
      </>
    );
  }
}

export default RelatedItems;
