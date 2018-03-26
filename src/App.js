import React, { Component } from 'react';
//import $ from 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/jquery/dist/jquery.min.js';
//import axios from 'axios';

import data from './assets/plandata.json';
import './App.css';
import TimeNow from './components/timenow';
import EntityList from './components/entitylist';
import RegionsList from './components/regionslist';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedEntity: '',
      entityList: []
    };
    this.data = [];
    this.regionsArr = [];
    this.regionsSet = '';
    this.regionsUniqArr = [];
    this.getRegionsList = this.getRegionsList.bind(this);
    this.getRegionsEntityList = this.getRegionsEntityList.bind(this);
  }



  componentWillMount() {
    /*axios.get('http://localhost:3000/assets/plandata.json')
      .then(response => console.log('success'))
      .catch(error => {
        console.log('error has occured');
      });*/

      /*var request = $.ajax({
  url: "http://localhost:3000/public/plandata.json",
  type: "GET",
  dataType: "json"
});

request.done(function(response) {
  console.log('success');
});

request.fail(function(jqXHR, textStatus) {
  console.log('error occurred ' + textStatus);
});*/

    /*$.getJSON("./planData.json", function(response) {
      //console.log(response);
      this.data = response.plan;
      //console.log(this.data);
      $.each(response, function (index, value) {
        console.log(value);
      });
    });*/
    var res, regionsArr = [];
    res = data.plan;
    res.map((val,i) => {
      regionsArr.push(val.region);
      return regionsArr;
    });
    this.regionsSet = new Set(regionsArr);
    regionsArr.map(val => console.log(val));
    console.log("after Set");
    console.log(this.regionsSet);
    this.regionsSet.forEach(element => {
      this.regionsUniqArr.push(element);
      return this.regionsUniqArr;
    });
  }

  handleSelectedEntity = (entityName) => {
    this.setState({selectedEntity: entityName});
  }

  getRegionsEntityList(regionVal) {
    var regionValue = regionVal;
    console.log(regionValue + " test");
  }

  getRegionsList(data) {
    /*this.data.map((val, i) => {
      this.regionsArr.push(val.region);
      return this.regionsArr;
    });
    //console.log("inside getRegionsList");
    this.regionsArr.map(val => console.log(val));*/
  }

  render() {
    return (
      <div className="App container">
        <header className="row header">
          <h1 className="col-sm-3 title">HSBC</h1>
          <h2 className="col-sm-7 heading">The Evergreening Global SIT Team Dashboard</h2>
          <TimeNow />
        </header>
        <main className="content-wrapper">
          <div className="row">
            <RegionsList regionsUniqArr={this.regionsUniqArr} getRegionsEntityList={this.getRegionsEntityList}/>
            <p className="selcEntity">{this.state.selectedEntity}</p>
          </div>
          <div className="row">
            <div className="col-sm-2 entityList">
              <EntityList onEntitySelection={this.handleSelectedEntity}/>
            </div>
            <div className="col-sm-7 center"><p>Column 2</p>
              <ul>

              </ul>
            </div>
            <aside className="col-sm-3"><p>Column 3</p></aside>
          </div>
        </main>
      </div>
    );
  }
}
