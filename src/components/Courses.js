import React from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const COURSES_QUERY = gql`
  query CoursesQuery {
    courses {
      id
      title
      author
      description
      topic
      url
    }
  }
`;

const Courses = () => {


  return (
      <div className="courses">
        <h1>Graphql Courses</h1>
        <Query query={COURSES_QUERY}>
          {
            ({loading, error, data}) => {
              if(loading) return <h4>loading...</h4>
              if(error) return <h4>Data fetch failed...</h4>
              return data.courses.map(course => <h1 key={course.id}>{course.title}</h1>)
            }
          }
        </Query>
      </div>
  );
};

export default Courses;
