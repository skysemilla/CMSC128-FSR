import React, {Component} from 'react'
import 'semantic-ui-css/semantic.min.css';
import {Modal} from 'semantic-ui-react'
import DeleteModal from './../../GenericDelete';

export default class ViewPublicationsRow extends Component{
	render(){
		return(
			<tr>
                  <td class = "center aligned">{this.props.permission}</td>
                  <td class = "center aligned">{this.props.date}</td>
                  <td class="center aligned">
                  <DeleteModal {...this.props}/>
                  </td>
			</tr>
		)
	}
}
