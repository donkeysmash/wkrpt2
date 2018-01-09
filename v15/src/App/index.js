import React from 'react';

class TestingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numRows: 0,
      generate: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleGenerate = this.handleGenerate.bind(this)
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleGenerate(e) {
    this.setState({
      generate: true
    });
  }

  handleClear(e) {

  }




  render() {
    let rows = null;
    if (generate) {
      
    }
    return (
      <div>
        <div>
          <input
            name="numRows"
            type="number"
            value={this.state.numRows}
            onChange={this.handleChange}
            placeholder="numRows"
          />
          <button onClick={this.handleGenerate}>Generate</button>
          <button onClick={this.handleClear}>Clear</button>
        </div>
        <div>
        </div>
      </div>

    );
  }
}

export default TestingComponent;
