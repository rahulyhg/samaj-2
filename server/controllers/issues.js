'use strict';
var issue_detail = '';
var request = require('request');
var async = require('async');

/**
 * Show an article
 */

exports.show = function(req, res) {
    var issue_url = 'http://10.11.1.29:8082/issues/node/'+req.params.issueId;
//    var issue_url = 'http://10.11.1.29:8082/issues/node/12';
    async.parallel({
	issue : function(callback) {
	    request(issue_url, function(error, response, html) {
		if(!error) {
		    issue_detail = JSON.parse(response.body);
		}
		callback(null, issue_detail);
	    });
	}
    }, function (err,data){
	res.render('issues', {
	    issues: data.issue
	});
    });
};

