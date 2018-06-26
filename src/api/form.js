import doApiRequest from './doApiRequest';

/**
 * Submit user data
 * @param {Object} data
 * @returns {Promise}
 */
export function createEvent(data) {
    return doApiRequest('events', data , 'POST');
}
