import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    let list = [];
    for (let i = 0; i < props.numRows; i++) {
      list.push({
        id: i,
        count: 0,
        isToggle: false
      });
    }
    this.state = { list }
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e) {
    const index = e.target.id;
    this.setState(state => {
      const existing = state.list[index];
      state.list[index] = {
        id: index,
        count: existing.count + 1,
        isToggle: !existing.isToggle
      };
      return state;
    });
  }

  render() {
    const toRender = this.state.list.map(e => {
      const { id, count, isToggle } = e;
      const color = isToggle ? {backgroundColor: 'orange'} : {};
      return (
        <div key={id} id={id} style={color} onClick={this.handleItemClick}>
          {`${id} - ${count}`}
        </div>
      );
    });

    return (
      <div>
        {toRender}
      </div>
    );
  }
}

export default List;
