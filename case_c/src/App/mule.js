import React from 'react';

class Mule extends React.Component {
  render() {
    const { toPass } = this.props;
    return (
      <div>
        {toPass}
      </div>
    );
  }

}


export default Mule;