import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import DeleteModal from './ViewPublications/DeleteModal'
import ViewPublicationsRow from './ViewPublicationsRow'
import NavBar from './../NavBar'

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

  render() {
    return (
      <div className="App-header">
        <NavBar/>
        <div
          class="ui compact piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h2 class="ui blue header">
              View Publications
              <button class="ui right floated blue button">Generate FSR</button>
              <button class="ui right floated blue button">
                Send to Admin
              </button>
            </h2>
          </div>
          <Divider hidden="true" />
          <div>

          <style> {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`} </style>
          <table class = "ui celled table">
              <thead>
                <tr>
                  <th class = "center aligned">Title</th>
                  <th class = "center aligned">Type</th>
                  <th class = "center aligned">Role</th>
                  <th class = "center aligned">Co-workers</th>
                  <th class = "center aligned">Funding</th>
                  <th class = "center aligned">Start Date</th>
                  <th class = "center aligned">End Date</th>
                  <th class = "center aligned">Approved Credit Units</th>
                  <th class = "center aligned">Total Workload Units</th>
                  <th class = "center aligned">Edit/Delete</th>
                </tr>
              </thead>
            <tbody>
              {this.state.data.map((item) =>{
                return(
                    <ViewPublicationsRow
                          completeTitle= {item.completeTitle}
                          researchSubtype ={item.researchSubtype}
                          Role= {item.Role}
                          Coworkers={item.Coworkers}
                          Funding={item.Funding}
                          StartDate={item.StartDate}
                          EndDate= {item.EndDate}
                          ApprovedCreditUnits= {item.ApprovedCreditUnits}
                          TotalWorkLoadUnits= {item.TotalWorkLoadUnits}/>
                  )
                })
              }
            </tbody>
          </table>
            <button class="ui right floated blue button" onClick={this.startAdd}>
              Add Publications
            </button>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
//=========================
ReactDOM.render(<ViewPublications />, document.getElementById('root'));
