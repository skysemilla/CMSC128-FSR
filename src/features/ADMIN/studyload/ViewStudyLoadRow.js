import React, {Component} from 'react'
import 'semantic-ui-css/semantic.min.css';
import DeleteModal from '../../GenericDelete';

export default class ViewStudyLoadRow extends Component{
	render(){
		return(
			<tr>
				<td className = "center aligned"> {this.props.degree} </td>
				<td className = "center aligned"> {this.props.uni} </td>
				<td className = "center aligned"> {this.props.studyleave} </td>
				<td className = "center aligned"> {this.props.fellowship} </td>
				<td className = "center aligned"> {this.props.courseno} </td>
				<td className = "center aligned"> {this.props.ccred} </td>
				<td className = "center aligned"> {this.props.day} </td>
				<td className = "center aligned"> {this.props.time} </td>
				<td className = "center aligned"> {this.props.school} </td>
				<td className = "center aligned"> {this.props.slcred} </td>
		        <td className="center aligned">
		        <DeleteModal {...this.props}/>
        </td>
			</tr>
		)
	}
}
