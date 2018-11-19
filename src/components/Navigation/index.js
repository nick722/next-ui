import React, { Component } from 'react';

import './Navigation.scss'
import './Navigation.css'
import NavSection from '../NavSection';


class Navigation extends Component {
  // constructor(props) {
  //   super(props)
  //   this.sections = ['section1', 'section2', 'section3']
  // }

  state = {
    sections: ['section1', 'section2', 'section3'],
    links: ['link1', 'link2', 'link3']
  }

  getSections() {
    return this.state.sections.map(
      section =>
        <ul>
          <NavSection name={this.state.sections}
            links = {this.state.links}
          />
        </ul>)
  }

  render() {
    return (
      <nav className="navigation">
        {this.getSections()}
      </nav>
    );
  }
}

export default Navigation;
