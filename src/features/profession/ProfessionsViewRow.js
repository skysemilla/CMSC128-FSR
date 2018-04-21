import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import DeleteModal from '../GenericDelete';

export default class ViewPublicationsRow extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.date_submitted)
    this.startView = this.startView.bind(this);
  }

  startView() {
    this.props.history.push('./link/to/attached/file');
  }

  render() {
    return (
      <tr>
        <td className="center aligned">{this.props.haveApplied === 1? "Yes":"No"}</td>
        <td className="center aligned">{this.props.date_submitted === null? "N/A":this.props.date_submitted }</td>
        <td className="center aligned">
          <button className="ui large compact icon button" onClick={this.startView}>
            <i className="eye icon"> </i>
          </button>
        </td>
        <td className="center aligned">
          <DeleteModal {...this.props} />
        </td>
      </tr>
    );
  }
}
