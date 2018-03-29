import React from 'react';

export default class ScriptInserter extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    //s.innerHTML = "document.write('This is output by document.write()!')";
    s.innerHTML = 'function check() {document.getElementById("yes").checked = true;} function uncheck() {document.getElementById("yes").checked = false;}';
    this.instance.appendChild(s);
  }

  render() {
    return <div ref={el => (this.instance = el)} />;
  }
}