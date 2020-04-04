import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Courses from './components/Courses';

const client = new ApolloClient({
  uri: '/graphql'
})

function App() {
  return (
      <ApolloProvider client={client}>
        <div className="App">
          <Courses/>
        </div>
      </ApolloProvider>
  );
}

export default App;
