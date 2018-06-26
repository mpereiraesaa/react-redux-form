import Event from '../models/event';
import logger from '../utils/logger';

exports.list = (req, res) => {
	const query = req.query || {};

	Event.find()
		.select('first_name last_name email event_date')
		.then(events => {
			res.json(events);
		})
		.catch(err => {
			logger.error(err);
			res.status(422).send(err.errors);
		});
};

exports.post = (req, res) => {
	const data = Object.assign({}, req.body) || {};

	Event.create(data)
		.then(event => {
			res.json(event);
		})
		.catch(err => {
			logger.error(err);
			res.status(500).send(err);
		});
};
