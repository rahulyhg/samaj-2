'use strict';

module.exports = function(app) {

    // Home route
    var issues = require('../controllers/issues');
    //app.route('/issues').get(index.list);

    app.get('/issues', issues.list);
    

};

