import React, { Component } from 'react';

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEntity: 'Select a Region'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      selectedEntity: e.currentTarget.textContent
    });
    this.onChangeRegion();
  }

  onChangeRegion() {
    if(this.state.selectedEntity === 'Africa') {

    }
  }

  render() {
    return (
      <nav className="regions col-sm-6">
        <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown">
          {this.state.selectedEntity}
        </button>
        <div className="dropdown-menu drpDwn">
          <a className="dropdown-item" href="#" onClick={this.handleChange}>Africa</a>
          <a className="dropdown-item" href="#" onClick={this.handleChange}>Asia</a>
          <a className="dropdown-item" href="#" onClick={this.handleChange}>Latin America</a>
          <a className="dropdown-item" href="#" onClick={this.handleChange}>Oceania</a>
          <a className="dropdown-item" href="#" onClick={this.handleChange}>Developed regions</a>
        </div>
      </nav>
    );
  }
}
