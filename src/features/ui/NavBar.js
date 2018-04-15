import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal } from 'semantic-ui-react'
import { Divider, Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import GenericLogout from './GenericLogout';
import SendtoAdmin from './../SendtoAdmin';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenu: this.props.Label,
      subMenu: this.props.subLabel,
      emp_id: this.props.emp_id,
      is_being_approved: this.props.is_being_approved
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmenus = this.handleSubmenus.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    Api.logout();
    this.props.history.push('../..');
  }

  handleChange(e) {
    if(e.currentTarget.id==='FSR'){
        console.log('AAA');
    }
    this.setState({ activeMenu: e.currentTarget.id});
    if(e.currentTarget.id==='profile'){
        this.props.history.push('../../profile');
    }else if(e.currentTarget.id==='FSR' && this.state.is_being_approved===1){
        this.props.history.push('../../beingApproved');
    }
    else{
        this.props.history.push('../../teachingload/view');
    }
  }

  handleSubmenus(e) {
    e.preventDefault();
    this.setState({ activeMenu: 'FSR'});
    this.setState({ subMenu: e.currentTarget.id });
    if(e.currentTarget.id==='teachingload'){
        this.props.history.push('../../teachingload/view', {empid: this.state.emp_id});
    }else if(e.currentTarget.id==='publications'){
        this.props.history.push('../../publications/view', {empid: this.state.emp_id});
    }else if(e.currentTarget.id==='adminwork'){
        this.props.history.push('../../adminwork/view', {empid: this.state.emp_id});
    }else if(e.currentTarget.id==='extension'){
        this.props.history.push('../../extension/view', {empid: this.state.emp_id});
    }else if(e.currentTarget.id==='studyload'){
        this.props.history.push('../../studyload/view', {empid: this.state.emp_id});
    }else if(e.currentTarget.id==='profession'){
        this.props.history.push('../../profession/view', {empid: this.state.emp_id});
    }else if(e.currentTarget.id==='profchair'){
        this.props.history.push('../../professorialchair/view', {empid: this.state.emp_id});
    }else if(e.currentTarget.id==='consultation'){
        this.props.history.push('../../consultationhours/view', {empid: this.state.emp_id});
    }else if(e.currentTarget.id==='subjects'){
        this.props.history.push('../../subjects/view', {empid: this.state.emp_id});
    }
    this.forceUpdate();
  }

  render() {
      if(this.state.activeMenu==='profile'){
        return(
         <div>
          <div class="ui blue inverted huge menu div1">
              <a class="active item" id="profile" onClick={this.handleChange}>
                Profile
              </a>
              <a class="item" id="FSR" onClick={this.handleChange}>
                FSR
              </a>
              <div class="right menu">
              <GenericLogout {...this.props}/>
            </div>
          </div>
        </div>
        )
      }else if(this.state.activeMenu==='beingapproved'){
        return(
         <div>
          <div class="ui blue inverted huge menu div1">
              <a class="item" id="profile" onClick={this.handleChange}>
                Profile
              </a>
              <a class="active item" id="FSR" onClick={this.handleChange}>
                FSR
              </a>
              <div class="right menu">
              <GenericLogout {...this.props}/>
            </div>
          </div>
        </div>
        )
      }else if(this.state.activeMenu==='FSR' && this.state.subMenu==='teachingload'){
        return(
        <div>
          <div class="ui blue inverted huge menu div1">
              <a class="item" id="profile" onClick={this.handleChange}>
                Profile
              </a>
              <a class="active item" id="FSR" onClick={this.handleChange}>
                FSR
              </a>
              <div class="right menu">
              <GenericLogout {...this.props}/>
            </div>
          </div>
          <div class="ui large inverted blue vertical menu flex-container large navDiv">
            <a id="teachingload" class="item active" onClick={this.handleSubmenus}>
              Teaching Load
            </a>
            <a id="publications" class="item" onClick={this.handleSubmenus}>
              Publications
            </a>
            <a id="adminwork" class="item" onClick={this.handleSubmenus}>
              Administrative Work
            </a>
            <a id="extension" class="item" onClick={this.handleSubmenus}>
              Extension and Community Service
            </a>
            <a id="studyload" class="item" onClick={this.handleSubmenus}>
              Study Load
            </a>
            <a id="profession" class="item" onClick={this.handleSubmenus}>
              Limited Practice of Profession
            </a>
            <a id="profchair" class="item" onClick={this.handleSubmenus}>
              Professorial Chair
            </a>
            <a id="consultation" class="item" onClick={this.handleSubmenus}>
              Consultation Hours
            </a>
            <div class="ui inverted horizontal divider"></div>
            <a id="subjects" class="item" onClick={this.handleSubmenus}>
              Subjects
            </a>
            <div class="ui inverted horizontal divider"></div>
            <SendtoAdmin/>
          </div>
        </div>
        )
      }else if(this.state.activeMenu==='FSR' && this.state.subMenu==='publications'){
        return(
        <div>
          <div class="ui blue inverted huge menu div1">
            <a class="item" id="profile" onClick={this.handleChange}>
              Profile
            </a>
            <a class="active item" id="FSR" onClick={this.handleChange}>
              FSR
            </a>
            <div class="right menu">
              <GenericLogout {...this.props}/>
            </div>
          </div>
          <div class="ui large inverted blue vertical menu flex-container large navDiv">
            <a id="teachingload" class="item" onClick={this.handleSubmenus}>
              Teaching Load
            </a>
            <a id="publications" class="item active" onClick={this.handleSubmenus}>
              Publications
            </a>
            <a id="adminwork" class="item" onClick={this.handleSubmenus}>
              Administrative Work
            </a>
            <a id="extension" class="item" onClick={this.handleSubmenus}>
              Extension and Community Service
            </a>
            <a id="studyload" class="item" onClick={this.handleSubmenus}>
              Study Load
            </a>
            <a id="profession" class="item" onClick={this.handleSubmenus}>
              Limited Practice of Profession
            </a>
            <a id="profchair" class="item" onClick={this.handleSubmenus}>
              Professorial Chair
            </a>
            <a id="consultation" class="item" onClick={this.handleSubmenus}>
              Consultation Hours
            </a>
            <div class="ui inverted horizontal divider"></div>
            <a id="subjects" class="item" onClick={this.handleSubmenus}>
              Subjects
            </a>
            <div class="ui inverted horizontal divider"></div>
            <SendtoAdmin/>
          </div>
        </div>
        )
      }else if(this.state.activeMenu==='FSR' && this.state.subMenu==='adminwork'){
        return(
        <div>
          <div class="ui blue inverted huge menu div1">
              <a class="item" id="profile" onClick={this.handleChange}>
                Profile
              </a>
              <a class="active item" id="FSR" onClick={this.handleChange}>
                FSR
              </a>
              <div class="right menu">
              <GenericLogout {...this.props}/>
            </div>
          </div>
          <div class="ui large inverted blue vertical menu flex-container large navDiv">
            <a id="teachingload" class="item" onClick={this.handleSubmenus}>
              Teaching Load
            </a>
            <a id="publications" class="item" onClick={this.handleSubmenus}>
              Publications
            </a>
            <a id="adminwork" class="item active" onClick={this.handleSubmenus}>
              Administrative Work
            </a>
            <a id="extension" class="item" onClick={this.handleSubmenus}>
              Extension and Community Service
            </a>
            <a id="studyload" class="item" onClick={this.handleSubmenus}>
              Study Load
            </a>
            <a id="profession" class="item" onClick={this.handleSubmenus}>
              Limited Practice of Profession
            </a>
            <a id="profchair" class="item" onClick={this.handleSubmenus}>
              Professorial Chair
            </a>
            <a id="consultation" class="item" onClick={this.handleSubmenus}>
              Consultation Hours
            </a>
            <div class="ui inverted horizontal divider"></div>
            <a id="subjects" class="item" onClick={this.handleSubmenus}>
              Subjects
            </a>
            <div class="ui inverted horizontal divider"></div>
            <SendtoAdmin/>
          </div>
        </div>
        )
      }else if(this.state.activeMenu==='FSR' && this.state.subMenu==='extension'){
        return(
        <div>
          <div class="ui blue inverted huge menu div1">
              <a class="item" id="profile" onClick={this.handleChange}>
                Profile
              </a>
              <a class="active item" id="FSR" onClick={this.handleChange}>
                FSR
              </a>
              <div class="right menu">
              <GenericLogout {...this.props}/>
            </div>
          </div>
          <div class="ui large inverted blue vertical menu flex-container large navDiv">
            <a id="teachingload" class="item" onClick={this.handleSubmenus}>
              Teaching Load
            </a>
            <a id="publications" class="item" onClick={this.handleSubmenus}>
              Publications
            </a>
            <a id="adminwork" class="item" onClick={this.handleSubmenus}>
              Administrative Work
            </a>
            <a id="extension" class="item active" onClick={this.handleSubmenus}>
              Extension and Community Service
            </a>
            <a id="studyload" class="item" onClick={this.handleSubmenus}>
              Study Load
            </a>
            <a id="profession" class="item" onClick={this.handleSubmenus}>
              Limited Practice of Profession
            </a>
            <a id="profchair" class="item" onClick={this.handleSubmenus}>
              Professorial Chair
            </a>
            <a id="consultation" class="item" onClick={this.handleSubmenus}>
              Consultation Hours
            </a>
            <div class="ui inverted horizontal divider"></div>
            <a id="subjects" class="item" onClick={this.handleSubmenus}>
              Subjects
            </a>
            <div class="ui inverted horizontal divider"></div>
            <SendtoAdmin/>
          </div>
        </div>
        )
      }else if(this.state.activeMenu==='FSR' && this.state.subMenu==='studyload'){
        return(
        <div>
          <div class="ui blue inverted huge menu div1">
              <a class="item" id="profile" onClick={this.handleChange}>
                Profile
              </a>
              <a class="active item" id="FSR" onClick={this.handleChange}>
                FSR
              </a>
              <div class="right menu">
              <GenericLogout {...this.props}/>
            </div>
          </div>
          <div class="ui large inverted blue vertical menu flex-container large navDiv">
            <a id="teachingload" class="item" onClick={this.handleSubmenus}>
              Teaching Load
            </a>
            <a id="publications" class="item" onClick={this.handleSubmenus}>
              Publications
            </a>
            <a id="adminwork" class="item" onClick={this.handleSubmenus}>
              Administrative Work
            </a>
            <a id="extension" class="item" onClick={this.handleSubmenus}>
              Extension and Community Service
            </a>
            <a id="studyload" class="item active" onClick={this.handleSubmenus}>
              Study Load
            </a>
            <a id="profession" class="item" onClick={this.handleSubmenus}>
              Limited Practice of Profession
            </a>
            <a id="profchair" class="item" onClick={this.handleSubmenus}>
              Professorial Chair
            </a>
            <a id="consultation" class="item" onClick={this.handleSubmenus}>
              Consultation Hours
            </a>
            <div class="ui inverted horizontal divider"></div>
            <a id="subjects" class="item" onClick={this.handleSubmenus}>
              Subjects
            </a>
            <div class="ui inverted horizontal divider"></div>
            <SendtoAdmin/>
          </div>
        </div>
        )
      }else if(this.state.activeMenu==='FSR' && this.state.subMenu==='profession'){
        return(
        <div>
          <div class="ui blue inverted huge menu div1">
              <a class="item" id="profile" onClick={this.handleChange}>
                Profile
              </a>
              <a class="active item" id="FSR" onClick={this.handleChange}>
                FSR
              </a>
              <div class="right menu">
              <GenericLogout {...this.props}/>
            </div>
          </div>
          <div class="ui large inverted blue vertical menu flex-container large navDiv">
            <a id="teachingload" class="item" onClick={this.handleSubmenus}>
              Teaching Load
            </a>
            <a id="publications" class="item" onClick={this.handleSubmenus}>
              Publications
            </a>
            <a id="adminwork" class="item" onClick={this.handleSubmenus}>
              Administrative Work
            </a>
            <a id="extension" class="item" onClick={this.handleSubmenus}>
              Extension and Community Service
            </a>
            <a id="studyload" class="item" onClick={this.handleSubmenus}>
              Study Load
            </a>
            <a id="profession" class="item active" onClick={this.handleSubmenus}>
              Limited Practice of Profession
            </a>
            <a id="profchair" class="item" onClick={this.handleSubmenus}>
              Professorial Chair
            </a>
            <a id="consultation" class="item" onClick={this.handleSubmenus}>
              Consultation Hours
            </a>
            <div class="ui inverted horizontal divider"></div>
            <a id="subjects" class="item" onClick={this.handleSubmenus}>
              Subjects
            </a>
            <div class="ui inverted horizontal divider"></div>
            <SendtoAdmin/>
          </div>
        </div>
        )
      }else if(this.state.activeMenu==='FSR' && this.state.subMenu==='profchair'){
        return(
        <div>
          <div class="ui blue inverted huge menu div1">
              <a class="item" id="profile" onClick={this.handleChange}>
                Profile
              </a>
              <a class="active item" id="FSR" onClick={this.handleChange}>
                FSR
              </a>
              <div class="right menu">
              <GenericLogout {...this.props}/>
            </div>
          </div>
          <div class="ui large inverted blue vertical menu flex-container large navDiv">
            <a id="teachingload" class="item" onClick={this.handleSubmenus}>
              Teaching Load
            </a>
            <a id="publications" class="item" onClick={this.handleSubmenus}>
              Publications
            </a>
            <a id="adminwork" class="item" onClick={this.handleSubmenus}>
              Administrative Work
            </a>
            <a id="extension" class="item" onClick={this.handleSubmenus}>
              Extension and Community Service
            </a>
            <a id="studyload" class="item" onClick={this.handleSubmenus}>
              Study Load
            </a>
            <a id="profession" class="item" onClick={this.handleSubmenus}>
              Limited Practice of Profession
            </a>
            <a id="profchair" class="item active" onClick={this.handleSubmenus}>
              Professorial Chair
            </a>
            <a id="consultation" class="item" onClick={this.handleSubmenus}>
              Consultation Hours
            </a>
            <div class="ui inverted horizontal divider"></div>
            <a id="subjects" class="item" onClick={this.handleSubmenus}>
              Subjects
            </a>
            <div class="ui inverted horizontal divider"></div>
            <SendtoAdmin/>
          </div>
        </div>
        )
      }else if(this.state.activeMenu==='FSR' && this.state.subMenu==='consultation'){
        return(
        <div>
          <div class="ui blue inverted huge menu div1">
              <a class="item" id="profile" onClick={this.handleChange}>
                Profile
              </a>
              <a class="active item" id="FSR" onClick={this.handleChange}>
                FSR
              </a>
              <div class="right menu">
              <GenericLogout {...this.props}/>
            </div>
          </div>
          <div class="ui large inverted blue vertical menu flex-container large navDiv">
            <a id="teachingload" class="item" onClick={this.handleSubmenus}>
              Teaching Load
            </a>
            <a id="publications" class="item" onClick={this.handleSubmenus}>
              Publications
            </a>
            <a id="adminwork" class="item" onClick={this.handleSubmenus}>
              Administrative Work
            </a>
            <a id="extension" class="item" onClick={this.handleSubmenus}>
              Extension and Community Service
            </a>
            <a id="studyload" class="item" onClick={this.handleSubmenus}>
              Study Load
            </a>
            <a id="profession" class="item" onClick={this.handleSubmenus}>
              Limited Practice of Profession
            </a>
            <a id="profchair" class="item" onClick={this.handleSubmenus}>
              Professorial Chair
            </a>
            <a id="consultation" class="item active" onClick={this.handleSubmenus}>
              Consultation Hours
            </a>
            <div class="ui inverted horizontal divider"></div>
            <a id="subjects" class="item" onClick={this.handleSubmenus}>
              Subjects
            </a>
            <div class="ui inverted horizontal divider"></div>
            <SendtoAdmin/>
          </div>
          <Modal size={this.state.size} open={this.state.open} onClose={this.close} style={{marginTop: "18%", marginLeft: "40%"}}>
            <Modal.Header>
              APPROVE FSR
            </Modal.Header>
            <Modal.Content>
              <p>Are you sure you want to approve this FSR?</p>
            </Modal.Content>
            <Modal.Actions>
              <Button negative onClick={this.close}>
                No
              </Button>
              <Button positive icon='checkmark' labelPosition='right' content='Yes' />
            </Modal.Actions>
          </Modal> 
        </div>
        )
      }else{
        return(
        <div>
          <div class="ui blue inverted huge menu div1">
              <a class="item" id="profile" onClick={this.handleChange}>
                Profile
              </a>
              <a class="active item" id="FSR" onClick={this.handleChange}>
                FSR
              </a>
              <div class="right menu">
              <GenericLogout {...this.props}/>
            </div>
          </div>
          <div class="ui large inverted blue vertical menu flex-container large navDiv">
            <a id="teachingload" class="item" onClick={this.handleSubmenus}>
              Teaching Load
            </a>
            <a id="publications" class="item" onClick={this.handleSubmenus}>
              Publications
            </a>
            <a id="adminwork" class="item" onClick={this.handleSubmenus}>
              Administrative Work
            </a>
            <a id="extension" class="item" onClick={this.handleSubmenus}>
              Extension and Community Service
            </a>
            <a id="studyload" class="item" onClick={this.handleSubmenus}>
              Study Load
            </a>
            <a id="profession" class="item" onClick={this.handleSubmenus}>
              Limited Practice of Profession
            </a>
            <a id="profchair" class="item" onClick={this.handleSubmenus}>
              Professorial Chair
            </a>
            <a id="consultation" class="item" onClick={this.handleSubmenus}>
              Consultation Hours
            </a>
            <div class="ui inverted horizontal divider"></div>
            <a id="subjects" class="item active" onClick={this.handleSubmenus}>
              Subjects
            </a>
            <div class="ui inverted horizontal divider"></div>
            <SendtoAdmin/>
          </div>
        </div>
        )
      }
  }
}
//=========================
ReactDOM.render(<NavBar />, document.getElementById('root'));