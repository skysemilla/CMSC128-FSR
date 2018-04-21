import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../../api';
import ViewPublicationsRow from './PublicationsViewRow'
import NavBar from './../ui/NavBarAdmin'

const dummySample = {researchType : 'Research',
                      researchSubtype : 'Research Proposal',
                      completeTitle: 'Sample',
                      Role: 'ABC',
                      Coworkers: 'ABC',
                      Funding: 'N/A',
                      StartDate: '03/03/03',
                      EndDate: '04/04/04',
                      ApprovedCreditUnits: '3',
                      TotalWorkLoadUnits: '3'};

export default class ViewPublications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [dummySample]
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.startAdd = this.startAdd.bind(this);
    this.generate = this.generate.bind(this);
  }


  componentDidMount = () => {
    //   e.preventDefault();
    //   Api.viewPublications({
    //   })
    //     .then(result => {
    //       this.setState({ publications: result});
    //     })
    //     .catch(e => alert('Error loading Publications!!'));
  };

  handleLogout() {
    Api.logout();
    this.props.history.push('../..');
  }

 startAdd() {
    this.props.history.push('./add');
  }

  generate() {
  }

  render() {
    return (
      <div classNameName="App-header">
        <div>
        <NavBar {...this.props} Label="edit" subLabel="publications"/>
        </div>
        <div classNameName="bodydiv">
        <div
          className="ui compact piled very padded text left aligned container segment mainDiv"
          color="teal">
          <div>
            <h2 className="ui blue header">
              PUBLICATIONS
            </h2>
          </div>
          <Divider hidden="true" />
          <div>

          <style> {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`} </style>
          <table className = "ui celled table">
              <thead>
                <tr>
                  <th className = "center aligned">Title</th>
                  <th className = "center aligned">Type</th>
                  <th className = "center aligned">Role</th>
                  <th className = "center aligned">Co-workers</th>
                  <th className = "center aligned">Funding</th>
                  <th className = "center aligned">Start Date</th>
                  <th className = "center aligned">End Date</th>
                  <th className = "center aligned">Approved Credit Units</th>
                  <th className = "center aligned">Total Workload Units</th>
                  <th className = "center aligned">Edit/Delete</th>
                </tr>
              </thead>
            <tbody>
              {this.state.data.map((item) =>{
                return(
                    <ViewPublicationsRow {...this.props}
                          completeTitle= {item.completeTitle}
                          researchSubtype ={item.researchSubtype}
                          Role= {item.Role}
                          Coworkers={item.Coworkers}
                          Funding={item.Funding}
                          StartDate={item.StartDate}
                          EndDate= {item.EndDate}
                          ApprovedCreditUnits= {item.ApprovedCreditUnits}
                          TotalWorkLoadUnits= {item.TotalWorkLoadUnits}
                          editURL = "../publications/edit"
                          label = "Publication"
                          subLabel = "publication"/>
                  )
                })
              }
            </tbody>
          </table>
            <button className="ui right floated blue button" onClick={this.startAdd}>
              Add Publication
            </button>
          </div>
        </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}