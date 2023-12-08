import * as React from 'react';
import {HeadFC} from "gatsby";
// create about page
const About : React.FC = () => {
  return (
    <div>
      <h1>Mon parcours et competences</h1>
      <p>This is the about page</p>
    </div>
  );
};

export const Head: HeadFC = () => <title>About ME</title>

export default About;