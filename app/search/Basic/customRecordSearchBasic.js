"use strict";

const SearchBasic = require("./common/searchBasic");

class CustomRecordSearchBasic extends SearchBasic {

    constructor() {
        super();
        this._type = "platformCommon";
        this._name = "CustomRecordSearchBasic";
    }
}

module.exports = CustomRecordSearchBasic;
