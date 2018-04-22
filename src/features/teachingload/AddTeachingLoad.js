import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';

// const errorTexts = [
//   <span style={{color: 'red'}}> {'This field is required'}</span>,
//   <span style={{color: 'red'}}> {'  must be valid'}</span>
// ]

// var formError = {
//   text: {
//     subj: '',
//     seccode: '',
//     studnum: ''
//   },
//   bool: {
//     subj: false,
//     seccode: false,
//     studnum: false
//   }
// };

export default class AddTeachingLoad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // emp_id: '',
      subj: '',
      seccode: '',
      // room: '',
      // days: '',
      // starttime: '',
      // endtime: '',
      // hours: '',
      studnum: '',
      data: [],
      sectionArray: [],

      validstudnum: false
      // creditwo: '',
      // studcred: '',
      // creditw: ''
    };

    this.handleChangeSubj = this.handleChangeSubj.bind(this);
    this.handleChangeSeccode = this.handleChangeSeccode.bind(this);
    // this.handleChangeRoom = this.handleChangeRoom.bind(this);
    // this.handleChangeDays = this.handleChangeDays.bind(this);
    // this.handleChangeStartTime = this.handleChangeStartTime.bind(this);
    // this.handleChangeEndTime = this.handleChangeEndTime.bind(this);
    // this.handleChangeHours = this.handleChangeHours.bind(this);
    this.handleChangeStudnum = this.handleChangeStudnum.bind(this);
    // this.handleChangeCreditwo = this.handleChangeCreditwo.bind(this);
    // this.handleChangeStudcred = this.handleChangeStudcred.bind(this);
    // this.handleChangeCreditwith = this.handleChangeCreditwith.bind(this);
    this.startAdd = this.startAdd.bind(this);
    // this.checkInput = this.checkInput.bind(this); 
    this.handleLogout = this.handleLogout.bind(this);
    this.updateUnits = this.updateUnits.bind(this);
  }

  componentDidMount() {
    Api.viewAllSubjects().then(response => {
      if (response.data.data[0] !== undefined) {
        this.setState({ data: response.data.data });
      }
    });
  }

  handleChangeSubj(e) {
    this.setState({ subj: e.target.value });
  }

  handleChangeSeccode(e) {
    this.setState({ seccode: e.target.value });
  }

  handleChangeStudnum(e) {
    this.setState({ studnum: e.target.value });  
    if(e.target.value === '' || e.target.value >= 200 || e.target.value <= 0){
      this.setState({ validstudnum: false });
    } else this.setState({ validstudnum: true });
  }

  handleLogout(e) {
    e.preventDefault();
    Api.logout();
    this.props.history.push('../..');
  }

  updateUnits(e){
    var tlcm=0;
    var tlc=0;
    Api.viewSubject({
      subject_code: this.state.subj,
      section_code: this.state.seccode
    })
    .then(response => {
      tlc=response.data.data.units;
      if (response.data.data !== undefined) {
        this.setState({ subjectData: response.data.data });
        if(response.data.data.isLecture==0 && response.data.data.isGraduate==0){
          tlcm=1.5;
        } else if(response.data.data.isLecture==1 && response.data.data.isGraduate==0){
          if(this.state.studnum<=40) tlcm=tlc;
          else if(this.state.studnum>40) tlcm=tlc*((this.state.studnum-40)/120 + 1);
          else if(this.state.studnum>160) tlcm=tlc*2;
        } else if(this.state.subj.toLowerCase().replace(" ", "")=="cmsc190"){
          tlcm=tlc*(this.state.studnum)*(0.5/3);
        } else if(this.state.subj.toLowerCase().replace(" ", "")=="it1" && this.state.studnum>=25){ //it1 && lecture && 25 or more studs
          tlcm*=1.33
        } else if(response.data.data.isGraduate==1){
          if(this.state.studnum<=4) tlcm=tlc;
          else if (this.state.studnum>4 && this.state.studnum<=9) tlcm=tlc*1.25;
          else if(this.state.studnum>9) tlcm=tlc*1.5;
        }

        Api.editAddTeachLoadUnits({
          units:tlcm
        }).catch(e=>alert('Error units'));
        console.log("TLCM: "+tlcm);
      } else console.log("WALA");
      // console.log(response.data.data);
      // console.log(this.state.subjectData);
    })
    .catch(e => alert('Error get subject'));
  }//end of update units

  startAdd(e) {
    e.preventDefault();
    if(this.state.subj !== '' &&
       this.state.seccode !== '' &&
       this.state.validstudnum === true){
        Api.addTeachLoad({
        subject_code: this.state.subj,
        section_code: this.state.seccode,
        no_of_students: this.state.studnum
      })
        .then(result => {
          this.props.history.push('./view'); //change to profile later!!
          alert('Teachingload successfully added!');
          this.updateUnits();
        })
        // .catch(e => alert(e));
        .catch(e => alert('Error adding new Teaching Load!'));
    }
    else {
      alert("Invalid input!");
    }
  }

  // checkInput(e) {
  //   e.preventDefault();
  //   if(!this.state.subj){
  //     formError.text.subj = errorTexts[0];
  //     formError.bool.subj = false;
  //   } else {
  //     formError.text.subj = '';
  //     formError.bool.subj = true;
  //   }

  //   if(!this.state.seccode){
  //     formError.text.seccode = errorTexts[0];
  //     formError.bool.seccode = false;
  //   } else {
  //     formError.text.seccode = '';
  //     formError.bool.seccode = true;
  //   }

  //   if(!this.state.studnum){
  //     formError.text.studnum = errorTexts[0];
  //     formError.bool.studnum = false;
  //   } else if (this.state.studnum <= 0 || this.state.studnum >= 200) {
  //     formError.text.studnum = errorTexts[1];
  //     formError.bool.studnum = false;
  //   } else {
  //     formError.text.studnum = '';
  //     formError.bool.studnum = true;
  //   }

  //   if(formError.bool.subj &&
  //       formError.bool.seccode &&
  //       formError.bool.studnum) {
  //     this.startAdd(e);
  //   } else this.forceUpdate();
  // }

  render() {
    var optionsArray = [];
    var secArray = [];
    var suppDup = [];
    var suppDup2 = [];

    this.state.data.map(item => {
      suppDup.push(item.subject_code);
    });

    for (var count = 0; count < suppDup.length; count++) {
      if (suppDup2.includes(suppDup[count]) !== true) {
        suppDup2.push(suppDup[count]);
      }
    }

    for (count = 0; count < suppDup2.length; count++) {
      var values = { subject: suppDup2[count], section: [] };
      optionsArray.push(values);
    }

    this.state.data.map(item => {
      optionsArray.map(data => {
        if (data.subject === item.subject_code) {
          data.section.push(item.section_code);
        }
      });
    });

    return (
      <div className="App-header">
        <div>
          <NavBar {...this.props} Label="FSR" subLabel="teachingload" />
        </div>
        <div className="bodyDiv">
        <div
          className="ui piled very padded text left aligned container segment mainDiv"
          color="teal">
          <div>
            <h2 className="ui blue header">
              ADD TEACHING LOAD
            </h2>
          </div>
          <Divider hidden="true" />
          <div className = "field">
            <style> {`select {margin:1vh 0vw 1vh 0vw;}`} </style>
            <label> <h3>Subject
              {
              this.state.subj === '' ?
                <div className = "ui left pointing red basic label">
                  Required
                </div>
                :
                <div className = "ui left pointing green basic label">
                  is valid!
                </div>
              }
              </h3>
              </label>
              <select 
                class = "dropdown"
                value = {this.state.subj} 
                onChange = {this.handleChangeSubj}>

              <option value = "" disabled selected hidden> Choose Subject </option>
              {
                optionsArray.map(
                  (item)=>{
                    return(
                      <option value = {item.subject}>
                      {item.subject}
                      </option>
                    )
                  }
                )}
              </select>
          </div>

          <div className = "field">
            {
              optionsArray.map(
                (item)=>{
                  if(this.state.subj === item.subject){
                    secArray = item.section;
                }
              }
            )}
           <label> <h3>Section
              {
              this.state.seccode === '' ?
                <div className = "ui left pointing red basic label">
                  Required
                </div>
                :
                <div className = "ui left pointing green basic label">
                  is valid!
                </div>
              }
              </h3>
              </label>
              <select 
                className = "dropdown"
                value = {this.state.seccode} 
                onChange = {this.handleChangeSeccode}>

              <option value = "" disabled selected hidden> Choose Section </option>
              {
              secArray.map(
                (item)=>{
                  return(
                    <option value = {item}>
                      {item}
                    </option>
                  )
                }
              )}
              </select>
          </div>

          <p>
            <a className="ui small header">No. of Students</a>
            <div className="ui input fluid mini focus">
              <input
                type="number"
                onChange={this.handleChangeStudnum}
              />
              {
                this.state.studnum === '' ?
                  <div className = "ui left pointing red basic label">
                    Required
                  </div>
                  :
                  [
                    (this.state.studnum <= 0 || this.state.studnum >= 200)?
                    <div className = "ui left pointing red basic label">
                      Invalid input
                    </div>
                    :
                    <div className = "ui left pointing green basic label">
                    is valid!
                    </div>
                  ]
              }
            </div>
          </p>
          <div className="ui center aligned container">
            <button
              className="ui center aligned blue button"
              onClick={this.startAdd}>
              Add Teaching Load
            </button>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
      </div>
    );
  }
}
