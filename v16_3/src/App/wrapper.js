import React from 'react';
import Donkey from './donkey';


class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    let _list = [];
    for (let i = 0; i < props.numRows; i++) {
      _list.push({
        age: i,
        name: 'ken',
        toPass: 'meh'
      });
    }

    this.state = {
      currentList: _list
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState(state => {
      state.currentList[0].toPass = 'changed'
      return state;
    });
  }

  render() {
    const { numRows } = this.props;
    const toRender = this.state.currentList.map(e => {
      const { age, name, toPass } = e;
      return (
        <Donkey key={age} age={age} name={name} toPass={toPass} />
      );
    })
    return (
      <div>
        <button onClick={this.handleButtonClick}>update pass</button>
        <div>{numRows}</div>
        <div>
          {toRender}
        </div>
      </div>
    );
  }
}

export default Wrapper;
