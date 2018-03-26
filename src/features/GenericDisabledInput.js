import React,{Component} from 'react'

export default class GenericDisabledInput extends Component{

  render(){

    const state = this.props.compareState
    const string = this.props.compareString
    const operation = this.props.operation
    const length = this.props.length

    return(
      <p>
        {
          operation === "===" ?

          state === string ?
          <p>
            <a class="ui small header"> {this.props.label} </a>
            <div class="ui input fluid mini focus">
            <input
              disabled
              type={this.props.type}
              onChange={this.props.handler}/>
            </div>
          </p>
          :
          <p>
            <a class="ui small header"> {this.props.label} </a>
              <div class="ui input fluid mini focus">
              <input
                type={this.props.type}
                onChange={this.props.handler}/>
              </div>
          </p>
          :
          state !== string ?
          <p>
            <a class="ui small header"> {this.props.label} </a>
            <div class="ui input fluid mini focus">
            <input
              disabled
              type={this.props.type}
              onChange={this.props.handler}/>
            </div>
          </p>
          :
          <p>
            <a class="ui small header"> {this.props.label} </a>
              <div class="ui input fluid mini focus">
              <input
                type={this.props.type}
                onChange={this.props.handler}/>
              </div>
          </p>

        }
      </p>
    )
  }
}

