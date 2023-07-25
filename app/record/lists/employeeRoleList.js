"use strict";

const BaseObject = require("../../baseObject");

class EmployeeRoleList extends BaseObject {

  constructor() {
    super();
    this.selectedRole = null;
  }

  _getSoapType() {
    return `${this._type}:rolesList`;
  }

  _getAttributes() {
    return "";
  }

  getNode() {

    const attributes = this._getAttributes();
    const type = this._getSoapType();

    if (!type) {
      throw new Error(`Invalid SOAP type ${type}`);
    }

    const node = {};

    node[type] = {};

    node[type]["$xml"] = `
      <listEmp:roles>
      <listEmp:selectedRole internalId="${this.selectedRole}"/>
    </listEmp:roles>
          `

    return node;
  }
}

module.exports = EmployeeRoleList;
