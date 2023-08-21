const { REGISTRY_URL} = require("../config/config");
const { default: axios } = require("axios");
const config = require('../config/config');
const utils = require('../services/utils');
const serviceUrl = `${REGISTRY_URL}/api/v1/Pledge`;

async function getAllCauses() {
    try {
        let listOfCauses = await axios.post(`${serviceUrl}/search`, 
        {
            "offset": 0,
            "filters": {

            }
        });
        return listOfCauses.data;
    } catch (error) {
        throw new Error({message: "Error while fectching causes"})
    }
}

async function createCause(cause){
    try {
        let createdCause = await axios.post(`${serviceUrl}/invite`, cause);
        return createdCause.data;
    } catch (error) {
        throw error
    }
}

async function getCauseById(causeId, headers){
    try {
        let adminSecret = config.ADMIN_API_SECRET_KEY;
        let token = await utils.getServiceAccountToken("admin-api", adminSecret);
        console.log(token);
        let getCause = await axios.get(`${serviceUrl}/${causeId}`,
        {headers: {
            'Authorization': `Bearer ${token}`,
            ...headers
        }}
        );
        return getCause.data;
    } catch (error) {
        console.log(error);
        throw error
    }
}

async function updateCauseById(causeId,cause){
    try {
        let adminSecret = config.ADMIN_API_SECRET_KEY;
        let token = await utils.getServiceAccountToken("admin-api", adminSecret);
        let updatedCause = await axios.post(`${serviceUrl}/${causeId}`,
        {headers: {
            'Authorization': `Bearer ${token}`
        }},
        cause
        );
        return updatedCause.data;
    } catch (error) {
        throw error
    }
}

async function getLivePledgedAmountByCauseID () {

}

module.exports= {
    getAllCauses,
    createCause,
    getCauseById,
    updateCauseById
}