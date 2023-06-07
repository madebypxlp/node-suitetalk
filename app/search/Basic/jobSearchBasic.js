"use strict";

const SearchBasic = require("./common/searchBasic");

class JobSearchBasic extends SearchBasic {

    constructor() {
        super();
        this._type = "platformCommon";
        this._name = "JobSearchBasic";
    }
}

module.exports = JobSearchBasic;
