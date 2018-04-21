//ADDED THIS PAGE
import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';

export default class GenericDelete extends Component {
  constructor(props) {
    super(props);

    if (typeof this.props.Coworkers !== 'undefined') {
      console.log(this.props.Coworkers);
    }
  }

  render() {
    if (typeof this.props.Coworkers !== 'undefined') {
      return (
        <div className="ui bulleted list">
          {this.props.Coworkers.map(item => {
            return (
              <div className="item" key={item.emp_id}>
                {item.f_name} {item.l_name}
              </div>
            );
          })}
        </div>
      );
    } else {
      return <div />;
    }
  }
}
