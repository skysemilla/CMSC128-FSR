import React,{Component} from 'react'

export default class GenericDisabledInput extends Component{

  render(){

    const state = this.props.compareState
    const string = this.props.compareString
    const operation = this.props.operation

    return(
      <p>
        {
          operation === "===" ?

          state === string ?
          <p>
            <a className="ui small header"> {this.props.label} </a>
            <div className="ui input fluid mini focus">
            <input
              disabled
              type={this.props.type}
              onChange={this.props.handler}/>
            </div>
          </p>
          :
          <p>
            <a className="ui small header"> {this.props.label} </a>
              <div className="ui input fluid mini focus">
              <input
                type={this.props.type}
                onChange={this.props.handler}/>
              </div>
          </p>
          :
          state !== string ?
          <p>
            <a className="ui small header"> {this.props.label} </a>
            <div className="ui input fluid mini focus">
            <input
              disabled
              type={this.props.type}
              onChange={this.props.handler}/>
            </div>
          </p>
          :
          <p>
            <a className="ui small header"> {this.props.label} </a>
              <div className="ui input fluid mini focus">
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

