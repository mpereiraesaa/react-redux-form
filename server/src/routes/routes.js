import Event from '../controllers/event';
import path from "path";

const index = (req, res) => {
	res.sendFile(path.join(__dirname + '/../public/index.html'));
}

module.exports = api => {
	api.route('/').get(index)
	api.route('/events').get(Event.list);
	api.route('/events').post(Event.post);
};
