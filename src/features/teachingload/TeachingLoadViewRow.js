import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import DeleteModal from './GenericDelete';

export default class ViewTeachingLoadRow extends Component {
  render() {
    return (
      <tr>
        <td className="center aligned"> {this.props.subj} </td>
        <td className="center aligned"> {this.props.seccode} </td>
        <td className="center aligned"> {this.props.room} </td>
         <td className="center aligned"> {this.props.days} </td>
        <td className="center aligned"> {this.props.starttime} </td>
        <td className="center aligned"> {this.props.endtime} </td>
        {/*<td className="center aligned"> {this.props.hours} </td>*/}
        <td className="center aligned"> {this.props.studnum} </td>
        {/*<td className="center aligned"> {this.props.creditwo} </td>*/}
        {/*<td className="center aligned"> {this.props.studcred} </td>*/}
        {/*<td className="center aligned"> {this.props.creditw} </td>*/}
        <td className="center aligned">
          <DeleteModal {...this.props} />
        </td>
      </tr>
    );
  }
}
