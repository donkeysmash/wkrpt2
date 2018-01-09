import React from 'react';
import Wrapper from './wrapper';

class TestingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numRows: 0,
      isGenerated: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleGenerate = this.handleGenerate.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleGenerate(e) {
    this.setState({ isGenerated: true });
  }

  handleClear(e) {
    this.setState({ isGenerated: false });
  }

  render() {

    return (
      <div>
        <div>
          {
            !this.state.isGenerated && (
            <input
              name="numRows"
              type="number"
              value={this.state.numRows}
              onChange={this.handleChange}
              placeholder="numRows"
            />)
          }

          {
            this.state.isGenerated ? 
              (<button onClick={this.handleClear}>clear</button>) :
              (<button onClick={this.handleGenerate}>generate</button>) 
          }
        </div>
        <div>
          {this.state.isGenerated && 
            (<Wrapper numRows={this.state.numRows} />)
          }
        </div>
      
      </div>

    );
  }
}

export default TestingComponent;
