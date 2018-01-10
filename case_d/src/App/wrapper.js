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
        toPass: 'meh',
        notToPass: 'bleh'
      });
    }

    this.state = {
      currentList: _list
    };
    this.handlePass = this.handlePass.bind(this);
    this.handleNotPass = this.handleNotPass.bind(this);
  }

  handlePass() {
    this.setState(state => {
      state.currentList[0].toPass = 'changed';
      return state;
    });
  }

  handleNotPass() {
    this.setState(state => {
      state.currentList[0].notToPass = 'chengaed';
      return state;
    });
  }

  render() {
    const { numRows } = this.props;
    const toRender = this.state.currentList.map(e => {
      const { age, name, toPass, notToPass } = e;
      return (
        <Donkey key={age} age={age} name={name} toPass={toPass} notToPass={notToPass}/>
      );
    })
    return (
      <div>
        <button onClick={this.handlePass}>update pass</button>
        <button onClick={this.handleNotPass}>update Not</button>
        <div>{numRows}</div>
        <div>
          {toRender}
        </div>
      </div>
    );
  }
}

export default Wrapper;
