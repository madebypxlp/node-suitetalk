"use strict";

const BaseObject = require("../../../baseObject");

class MultiSelectCustomFieldRef extends BaseObject {
    constructor() {
        super();
        this.scriptId = undefined;
        this.internalId = undefined; // This might be unused for multi-select fields
        this.values = []; // Use an array to hold multiple values
    }

    _getSoapType() {
        return "platformCore:customField";
    }

    _getAttributes() {
        const attr = {
            "scriptId": this.scriptId,
            "xsi:type": `platformCore:${this._type}`,
        };

        if (!this.scriptId) {
            delete attr.scriptId;
        }

        // Typically, multi-select fields do not use internalId attribute, so it's omitted here

        return attr;
    }

    getNode() {
        if (!this.scriptId) {
            throw new Error("scriptId is not defined");
        }

        const attributes = this._getAttributes();
        const type = this._getSoapType();

        if (!type) {
            throw new Error(`Invalid SOAP type ${type}`);
        }

        // Construct a node for each value in the values array
        const valueNodes = this.values.map((value) => {
            if (typeof value !== 'object' || !value.internalId) {
                throw new Error('Each value in the values array should be an object with an internalId property');
            }

            return `<platformCore:value internalId="${value.internalId}"/>`;
        });

        const node = {};
        node[type] = {};

        if (attributes) {
            node[type]["$attributes"] = attributes;
        }

        // Join all value nodes into a single string and set as $xml
        if (valueNodes.length > 0) {
            node[type]["$xml"] = valueNodes.join('');
        }

        return node;
    }
}

module.exports = MultiSelectCustomFieldRef;
