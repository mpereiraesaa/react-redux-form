import Event from '../controllers/event';

module.exports = api => {
	api.route('/events').get(Event.list);
	api.route('/events').post(Event.post);
};
