import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import ViewProfessionsRow from './ProfessionsViewRow'
import NavBarAdmin from './../ui/NavBarAdmin';

const dummySample={permission: 'YES', date: '03/26/18'};
const dummySample2={permission: 'NO', date: ''};

export default class ViewProfession extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [dummySample, dummySample2]
    };

    this.startAdd = this.startAdd.bind(this);
  }


  componentDidMount = () => {
    //   e.preventDefault();
    //   Api.viewProfession({
    //   })
    //     .then(result => {
    //       this.setState({ publications: result});
    //     })
    //     .catch(e => alert('Error loading Profession!!'));
  };

 startAdd() {
    this.props.history.push('../profession/view');
  }

  render() {
    return (
      <div classNameName="App-header">
        <div>
        <NavBarAdmin {...this.props} Label="edit" subLabel="profession"/>
        </div>
        <div classNameName="bodydiv">
        <div
          className="ui compact piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h2 className="ui blue header">
              VIEW PROFESSION
            </h2>
          </div>
          <Divider hidden="true" />
          <div>

          <style> {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`} </style>
          <table className = "ui celled table">
              <thead>
                <tr>
                  <th className = "center aligned">Official permission?</th>
                  <th className = "center aligned">Date</th>
                  <th className = "center aligned">Edit/Delete</th>
                </tr>
              </thead>
            <tbody>
              {this.state.data.map((item) =>{
                return(
                    <ViewProfessionsRow {...this.props}
                    permission= {item.permission}
                    date ={item.date}
                    label = "Profession"
                    subLabel = "profession"
                    editURL = "../profession/edit"/>
                  )
                })
              }
            </tbody>
          </table>
            <button action="/admin/editFSR/profession/add" className="ui right floated blue button" onClick={this.startAdd}>
              Add new Profession
            </button>
          </div>
        </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}