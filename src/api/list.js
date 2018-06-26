import doApiRequest from './doApiRequest';

/**
 * get Events
 * @returns {Promise}
 */
export function getEvents() {
    return doApiRequest('events');
}
