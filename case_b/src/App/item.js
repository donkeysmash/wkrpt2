import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false,
      count: 0
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e) {
    this.setState(state => ({
      count: ++state.count,
      isToggle: !state.isToggle
    }));
  }

  render() {
    const { id } = this.props;
    const { count, isToggle } = this.state;
    const color = isToggle ? {backgroundColor: 'orange'} : {};
    return (
      <div style={color} onClick={this.handleItemClick}>
        {`${id} - ${count}`}
      </div>
    );
  }
}

export default Item;
