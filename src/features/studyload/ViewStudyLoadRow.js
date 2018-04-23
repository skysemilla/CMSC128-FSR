import React, {Component} from 'react'
import 'semantic-ui-css/semantic.min.css';
import DeleteModal from './GenericDelete';
import * as Api from '../../api';

export default class ViewStudyLoadRow extends Component{

	constructor(props) {
        super(props);
		this.state = {
			days:""
		};
		this.startView=this.startView.bind(this);
		this.getDays=this.getDays.bind(this);
      };

    startView(){
        this.props.history.push('./link/to/attached/file');
    }
	getDays(id){
		var stringday = "";
		Api.getDays({studyload_id:id}).then((results)=>{
			results.data.data.forEach(json=>{
				stringday+=json.day+" "
			})
		}).then(()=>{
			this.setState({days: stringday});
		}
		)
	}
	componentDidMount(){
		this.getDays(this.props.id);
	}
	render(){
		return(
			<tr>
				<td className = "center aligned"> {this.props.courseno} </td>
				<td className = "center aligned"> {this.props.ccred} </td>
				<td className = "center aligned"> {this.state.days} </td>
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
