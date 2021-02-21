import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scroll-menu';
import './horiscroll.css';
 
// list of items
const list = [
  { name: 'All' },
  { name: 'Cinema' },
  { name: 'Film Criticizms' },
  { name: 'Conversation' },
  { name: 'Mixes' },
  { name: 'Gadgets' },
  { name: 'Javascript' },
  { name: 'Python' },
  { name: 'Street food' },
  { name: 'Shopping' },
  { name: 'Recently Uploaded ' },
  { name: 'Live' },
  { name: 'Django' },
  { name: 'Favourites' },
  { name: 'Music' }
];
 
// One item component
// selected prop will be passed
const MenuItem = ({text, selected}) => {
  return <div
    className={`menu-item ${selected ? 'active' : ''}`}
    >{text}</div>;
};
 
// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const {name} = el;
 
    return <MenuItem text={name} key={name} selected={selected} />;
  });
 
 
const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};
 
 
const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
 
const selected = 'item1';
 
class Horiscroll extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }
 
  state = {
    selected
  };
 
  onSelect = key => {
    this.setState({ selected: key });
  }
 
 
  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;
 
    return (
      <div className="App">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

export default Horiscroll;
