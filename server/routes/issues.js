'use strict';
module.exports = function(app) {

    // Home route
    var issues = require('../controllers/issues');
    app.get('/issues/:issueId', issues.show);
};

