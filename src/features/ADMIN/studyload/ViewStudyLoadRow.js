import React, {Component} from 'react'
import 'semantic-ui-css/semantic.min.css';
import {Modal} from 'semantic-ui-react';
import DeleteModal from '../../GenericDelete';

export default class ViewStudyLoadRow extends Component{
	render(){
		return(
			<tr>
				<td class = "center aligned"> {this.props.degree} </td>
				<td class = "center aligned"> {this.props.uni} </td>
				<td class = "center aligned"> {this.props.studyleave} </td>
				<td class = "center aligned"> {this.props.fellowship} </td>
				<td class = "center aligned"> {this.props.courseno} </td>
				<td class = "center aligned"> {this.props.ccred} </td>
				<td class = "center aligned"> {this.props.day} </td>
				<td class = "center aligned"> {this.props.time} </td>
				<td class = "center aligned"> {this.props.school} </td>
				<td class = "center aligned"> {this.props.slcred} </td>
		        <td class="center aligned">
		        <DeleteModal {...this.props}/>
        </td>
			</tr>
		)
	}
}
