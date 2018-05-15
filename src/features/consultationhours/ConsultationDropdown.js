import React,{Component} from 'react'
import './../SignUpForm.css'

export default class ConsultationDropdown extends Component{

	render(){
		return(
			<span>
				<style> {` select {margin: 1vh 1vw 1vh 1vh; font-size: 14px;}`} </style>
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
										{item.label}
										</option>
									)
								}
							)}
						</select>

					</a>
				</p>
			</span>
		)
	}
}
