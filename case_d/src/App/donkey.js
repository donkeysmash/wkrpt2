import React from 'react';
import Mule from './mule';

class Donkey extends React.Component {
  shouldComponentUpdate(props, state) {
    const { name, age, toPass } = this.props;
    if (name !== props.name) {
      return true;
    }
    if (age !== props.age) {
      return true;
    }
    if (toPass !== props.toPass) {
      return true;
    }
    return false;
  }

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
