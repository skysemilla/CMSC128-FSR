import React, {Component} from 'react'
import 'semantic-ui-css/semantic.min.css';
import DeleteModal from './GenericDelete';

export default class ViewStudyLoadRow extends Component{

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
				<td className = "center aligned"> {this.props.courseno} </td>
				<td className = "center aligned"> {this.props.ccred} </td>
				<td className = "center aligned"> {this.props.day1} </td>
				<td className = "center aligned"> {this.props.day2} </td>
				<td className = "center aligned"> {this.props.time1} </td>
				<td className = "center aligned"> {this.props.time2} </td>
				<td className = "center aligned"> {this.props.school} </td>
				<td className = "center aligned">
        			<button className = "ui icon button" onClick = {this.startView}>
        				<i className = "eye icon"> </i>
        			</button>
		        </td>	
		        <td className="center aligned">
		        <DeleteModal {...this.props}/>
        		</td>
			</tr>
		)
	}
}
