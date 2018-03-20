import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/jquery/dist/jquery.min.js';
import xls from '../node_modules/excel/excelParser.js';

import './assets/List_of_countries.xls';
import PlanData from './assets/evergreening_plan.xlsx';
import './App.css';

import TimeNow from './components/timenow';
import EntityList from './components/entitylist';
import RegionsList from './components/regionslist';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedEntity: ''
    };
  }

  componentDidMount() {

  }

  handleSelectedEntity = (entityName) => {
    this.setState({selectedEntity: entityName});
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
            <RegionsList />
            <p className="selcEntity">{this.state.selectedEntity}</p>
          </div>
          <div className="row">
            <div className="col-sm-2 entityList">
              <EntityList onEntitySelection={this.handleSelectedEntity}/>
            </div>
            <div className="col-sm-7 center"><p>Column 2</p></div>
            <aside className="col-sm-3"><p>Column 3</p></aside>
          </div>
        </main>
      </div>
    );
  }
}
