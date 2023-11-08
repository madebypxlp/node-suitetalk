"use strict";

const CustomFieldRef = require("./common/multiSelectCustomFieldRef");

class MultiSelectCustomFieldRef extends CustomFieldRef {

    constructor() {
        super();
        this._type = "MultiSelectCustomFieldRef";
    }
}

module.exports = MultiSelectCustomFieldRef;
