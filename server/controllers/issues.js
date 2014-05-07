'use strict';



exports.list = function(req, res) {
    // Send some basic starting info to the view
    res.render('issues', {username: 'hello world'});
};
