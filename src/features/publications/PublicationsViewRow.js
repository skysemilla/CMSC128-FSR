import React, {Component} from 'react'
import 'semantic-ui-css/semantic.min.css';
import {Modal} from 'semantic-ui-react'
import DeleteModal from '../GenericDelete';
import ViewCoworkers from './ViewCoworkers';

export default class ViewPublicationsRow extends Component{
      constructor(props) {
            super(props);
      };

      render(){
		return(
			<tr>
                  <td class = "center aligned">{this.props.completeTitle}</td>
                  <td class = "center aligned">{this.props.researchSubtype}</td>
                  <td class = "center aligned">{this.props.Role}</td>
                  <td class = "center aligned"> <ViewCoworkers {...this.props} Coworkers={this.props.Coworkers}/> </td>
                  <td class = "center aligned">{this.props.Funding}</td>
                  <td class = "center aligned">{this.props.StartDate}</td>
                  <td class = "center aligned">{this.props.EndDate}</td>
                  <td class = "center aligned">{this.props.ApprovedCreditUnits}</td>
                  <td class="center aligned">
                  <DeleteModal {...this.props}/>
                  </td>
			</tr>
		)
	}
}
