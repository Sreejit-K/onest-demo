const { REGISTRY_URL} = require("../config/config");
const { default: axios } = require("axios");
const config = require('../config/config');
const utils = require('../services/utils');


const serviceUrl = `${REGISTRY_URL}/api/v1/Donor`;