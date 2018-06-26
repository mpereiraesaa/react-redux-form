import axios from 'axios';

const API = '127.0.0.1:5000/';

/**
 * Method for making ajax calls to the site's api
 * @param {String} endpoint - the api endpoint
 * @param {Object|string} [data=null] - key:value pairs of the data to be sent to server
 * @param {String} [method=get] - the type of ajax request to make
 * @param {String} [contentType=json] - content type to send
 * @returns {Promise}
 */
export default async function doApiRequest(endpoint, data = null, method = 'GET', contentType = 'application/json') {
    let url = `${API}${endpoint}`;

    let options = {
        url,
        method,
        headers: {
            'Accept': 'application/json',
        },
        data: data === null || method === 'GET' ? undefined : (contentType === 'application/json' ? JSON.stringify(data) : data)
    };

    try {
        const response = await axios(options);

        console.log("Response:")
        console.log(response)

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
