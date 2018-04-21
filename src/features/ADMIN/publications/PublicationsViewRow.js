import React, {Component} from 'react'
import 'semantic-ui-css/semantic.min.css';
import DeleteModal from '../../GenericDelete';

export default class ViewPublicationsRow extends Component{
	render(){
		return(
			<tr>
                  <td className = "center aligned">{this.props.completeTitle}</td>
                  <td className = "center aligned">{this.props.researchSubtype}</td>
                  <td className = "center aligned">{this.props.Role}</td>
                  <td className = "center aligned">{this.props.Coworkers}</td>
                  <td className = "center aligned">{this.props.Funding}</td>
                  <td className = "center aligned">{this.props.StartDate}</td>
                  <td className = "center aligned">{this.props.EndDate}</td>
                  <td className = "center aligned">{this.props.ApprovedCreditUnits}</td>
                  <td className = "center aligned">{this.props.TotalWorkLoadUnits}</td>
                  <td className="center aligned">
                  <DeleteModal {...this.props}/>
                  </td>
			</tr>
		)
	}
}
