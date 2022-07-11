const Course = require('../models/courses.js');

class SiteControllers {
    // [Get] /
    home(req, res, next) {
        Course.find({}).lean() // lean cho phep handlebars truy cap data cua object
            .then(course => {
                res.render('home', { course })
            })
            .catch(next);
    }
    search(req, res) {
        res.send('Search');
    }
}

module.exports = new SiteControllers();
