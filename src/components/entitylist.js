import React, { Component } from 'react';

export default class EntityList extends Component {
  constructor(props) {
    super(props);

    this.selcEntityName = '';
    this.getEntityName = this.getEntityName.bind(this);
  }

  getEntityName = (e) => {
    this.selcEntityName = e.currentTarget.textContent;
    this.props.onEntitySelection(this.selcEntityName);
  }

  render() {
    return (
      <div className="btn-group-vertical">
        <button type="button" className="btn btn-success" onClick={this.getEntityName}>USA</button>
        <button type="button" className="btn btn-success" onClick={this.getEntityName}>Canada</button>
        <button type="button" className="btn btn-success" onClick={this.getEntityName}>Mexico</button>
        <button type="button" className="btn btn-success" onClick={this.getEntityName} disabled>Cuba</button>
        <button type="button" className="btn btn-success" onClick={this.getEntityName}>Panama</button>
      </div>
    );
  }
}
