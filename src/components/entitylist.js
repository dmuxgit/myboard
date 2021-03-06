import React, { Component } from 'react';

export default class EntityList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entityArr:  this.props.toRenderEntityArr
    };

    this.selcEntityName = '';
    //this.entityArr = this.props.toRenderEntityArr;
    this.getEntityName = this.getEntityName.bind(this);
  }

  getEntityName = (e) => {
    this.selcEntityName = e.currentTarget.textContent;
    this.props.onEntitySelection(this.selcEntityName);
  }

  componentWillMount() {
    window.addEventListener('load', this.test());
  }
  /*componentWillReceiveProps(nextProps) {
    this.setState({
      entityArr: nextProps.toRenderEntityArr
    });
    //window.addEventListener('load', this.test());
    console.log(this.state.entityArr);
  }*/

  test() {
    console.log(this.state.entityArr);
  }

  render() {
    var renderEntities = this.state.entityArr.map((entity, index) => {
      return <button key={index} type="button" className="btn btn-success" onClick={this.getEntityName}> { entity } </button>
    });
    return (
      <div className="btn-group-vertical">{renderEntities}</div>
    );
  }
}
