import React, {Component} from 'react'
import 'semantic-ui-css/semantic.min.css';
import {Modal} from 'semantic-ui-react'
import DeleteModal from '../GenericDelete';

export default class ViewPublicationsRow extends Component{
	  constructor(props) {
	        super(props);

	        this.startView=this.startView.bind(this);
	  };

      startView(){
            this.props.history.push('./link/to/attached/file');
      }

	render(){
		return(
			<tr>
                  <td class = "center aligned">{this.props.permission}</td>
                  <td class = "center aligned">{this.props.date}</td>
                  <td class="center aligned">
                    <button class="ui large compact icon button" onClick={this.startView}>
                      <i class="eye icon"> </i>
                    </button>
                  </td>
                  <td class="center aligned">
                  <DeleteModal {...this.props}/>
                  </td>
			</tr>
		)
	}
}
