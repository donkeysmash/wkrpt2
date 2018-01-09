import React from 'react';
import Mule from './mule';

class Donkey extends React.Component {
  render() {
    const { name, age, ...rest } = this.props;
    return (
      <div>
        <div>
          {`${name} - ${age}`}
        </div>
        <div>
          <Mule {...rest} />
        </div>
      </div>
    );
  }
}

export default Donkey;
