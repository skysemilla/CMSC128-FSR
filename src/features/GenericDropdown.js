import React,{Component} from 'react'
import './SignUpForm.css'

export default class GenericDropdown extends Component{

	render(){
		return(
			<div>
				<p>
					<a class="ui small header"> {this.props.labelHeader}
						<select 
							class = "dropdown"
							value = {this.props.value} 
							onChange = {this.props.handler}>

						<option value = "" disabled selected hidden> {this.props.labelProper} </option>
						{
							this.props.options.map(
								(item)=>{
									return(
										<option value = {item.text} key = {item.id}>
										{item.text}
										</option>
									)
								}
							)}
						</select>
					</a>
				</p>
			</div>
		)
	}
}