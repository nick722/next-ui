import React, {Component} from 'react';
import NavItem from '../NavItem/NavItem';

class NavSection extends Component {
  // = ({name, links}) => {
  render() {
  return (
    <ul>
      {this.props.name}
      <NavItem/>
    </ul>
  );
};
}

export default NavSection;
