import React, { Component } from 'react';
import './Home.css';
import Button from '../NavButton/NavButton';

class Home extends Component {
  render() {
    return (
      <div className="container">

        <section className="section">
          <div className="container">
            <h1 className="title">Lazy Loading</h1>
            <h2 className="subtitle">
              A simple app to demo how lazy loading routes works in React.
            </h2>
            <section className="bottom">
              <Button name="Go to About page" link="/about" />
              <Button name="Got to Blog page" link="/blog" />
            </section>
          </div>
        </section>

      </div>
    );
  }
}

export default Home;
