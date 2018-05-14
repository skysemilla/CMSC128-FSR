import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';
import ViewAttachments from './../ViewAttachments';

export default class ViewProfessorialChair extends Component {
  constructor(props) {
    super(props);

    this.state = {
      professional_chair: null,
      grants: null,
      grant_title: null,
      start_date: null,
      end_date: null    ,
      attachment: null  
    };

    this.startEdit = this.startEdit.bind(this);
  }

  startEdit(e) {
    this.props.history.push('../professorialchair/edit');
  }
  

  componentDidMount() {
    
    Api.getSession().then(res => {

      if (res.data.data !== null) {
        Api.viewFacultyGrant({id: res.data.data.emp_id }).then(result => {
          console.log(result.data)
          if (result.data.data !== null) {
            this.setState({professional_chair:result.data.data[0].professional_chair})
            this.setState({grants:result.data.data[0].grants})
            this.setState({grant_title:result.data.data[0].grant_title})
            this.setState({start_date:result.data.data[0].start_date})
            this.setState({end_date:result.data.data[0].end_date})
          console.log(result.data)
          }
        });
      }
    });
  }

  render() {
    return (
      <div className="App-header">
        <div>
          <NavBar {...this.props} Label="FSR" subLabel="profchair" />
        </div>
        <Divider hidden="true"/>
        <Divider hidden="true"/>
        <Divider hidden="true"/>
        <Divider hidden="true"/>
        <Divider hidden="true"/>
        <div className="bodyDiv">
          <div
            className="ui compact piled very padded text left aligned container segment"
            color="teal">
            <div>
              <h1 className="ui blue header">PROFESSORIAL CHAIR</h1>
            </div>

            <div className="ui large list">
              <div>
                <div className="item">
                  <div className="content">
                    <p>
                      <b>Professorial Chair: </b>
                      {this.state.professional_chair!=null?this.state.professional_chair:"N/A"}
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <p>
                      <b>Grant: </b>
                      {this.state.grants!=null?this.state.grants:"N/A"}
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <p>
                      <b>Grant title: </b>
                      {this.state.grant_title!=null?this.state.grant_title:"N/A"}
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <p>
                      <b>Start date: </b>
                      {this.state.start_date!=null?this.state.start_date:"N/A"}
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <p>
                      <b>End date: </b>
                      {this.state.end_date!=null?this.state.end_date:"N/A"}
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <p>
                      <b>Attachments: </b>
                      {this.state.attachment === null ? (
                        'N/A'
                      ) : (
                        <ViewAttachments
                          {...this.props}
                          professional_chair = {this.state.professional_chair}
                          label="Professorial Chair"
                          subLabel="...this.props not working"
                        />
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="ui blue right floated button"
              onClick={this.startEdit}>
              Edit Professorial Chair
            </button>
            <Divider hidden="true" />
          </div>
        </div>
      </div>
    );
  }
}
