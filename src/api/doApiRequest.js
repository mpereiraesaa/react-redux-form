import axios from 'axios';

const API = 'http://127.0.0.1:3000/';

/**
 * Method for making ajax calls to the site's api
 * @param {String} endpoint - the api endpoint
 * @param {Object|string} [data=null] - key:value pairs of the data to be sent to server
 * @param {String} [method=get] - the type of ajax request to make
 * @returns {Promise}
 */
export default async function doApiRequest(endpoint, data = null, method = 'GET') {
    let url = `${API}${endpoint}`;

    let options = {
        url,
        method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data: data
    };

    try {
        const response = await axios(options);

        if (response.data) {
            return response.data;
        }
        else {
            let error = new Error('Something wrong happen.');

            error.response = response;
            throw error;
        }
    }
    catch (err) {
        let error = new Error(err || 'Something wrong happen.');

        throw error;
    }
}
