import React, { Component } from 'react';

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRegion: 'Select a Region'
    };
    this.selectedRegion = 'Select a Region';
    this.handleChange = this.handleChange.bind(this);
    this.regionsArr = this.props.regionsUniqArr;
    this.test = '';
  }

  sendToParent() {
    this.props.getRegionVal(this.state.selectedRegion);
  }

  componentDidUpdate() {
    this.sendToParent();
  }
  
  handleChange(e) {
    this.setState({
      selectedRegion: e.currentTarget.textContent
    });
  }

  render() {
    var regionsList = this.regionsArr.map((region, index) => {
      return <a key={index} className="dropdown-item" href="#" onClick={this.handleChange}>{region}</a>
    });
    return (
      <nav className="regions col-sm-6">
        <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown">
          {this.state.selectedRegion}
        </button>
        <div className="dropdown-menu drpDwn">{ regionsList }</div>
      </nav>
    );
  }
}
