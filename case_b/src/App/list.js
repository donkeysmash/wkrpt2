import React from 'react';
import Item from './item';

class List extends React.Component { 
  render() { 
    console.log('List is rendered');
    const numRows = this.props.numRows;
    let toRender = [];
    for (let i = 0; i < numRows; i++) {
      toRender.push(
        <Item key={i} id={i} />
      );
    }

    return (
      <div>
        {toRender}
      </div>
    );
  }
}

export default List;
