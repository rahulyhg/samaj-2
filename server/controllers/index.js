'use strict';

var request = require('request');
var async = require('async');
var issues_output = '';
var latest_issues_output = '';
var banner_output = '';
var suggestions_output ='';
var ideas_output = '';
exports.render = function(req, res) {
    var url = 'http://10.11.1.29:8082/issues/node';
    var latest_issues_url = 'http://10.11.1.29:8082/latest-issues';
    var banner_images_url = 'http://10.11.1.29:8082/banner-images';
    var ideas_url = 'http://10.11.1.29:8082/ideas';
    var suggestions_url = 'http://10.11.1.29:8082/suggestions';

    async.parallel({
	get_issues : function(callback) {
	    request(url, function(error, response, html) {
		if(!error) {
		    issues_output = JSON.parse(response.body);
		}
		callback(null, issues_output);
	    });
	},
	latest_issues : function(callback) {
	    request(latest_issues_url, function(error, response, html) {
		if(!error) {
		    latest_issues_output = JSON.parse(response.body);
		}
		callback(null, latest_issues_output);
	    });
	},
	banner_images : function(callback) {
	    request(banner_images_url, function(error, response, html) {
		if(!error) {
		    banner_output = JSON.parse(response.body);
		}
		callback(null, banner_output);
	    });
	},
	ideas : function(callback) {
	    request(ideas_url, function(error, response, html) {
		if(!error) {
		    ideas_output = JSON.parse(response.body);
		}
		callback(null, ideas_output);
	    });
	},
	suggestions : function(callback) {
	    request(suggestions_url, function(error, response, html) {
		if(!error) {
		    suggestions_output = JSON.parse(response.body);
		}
		callback(null, suggestions_output);
	    });
	}
    }, function (err,data){
	res.render('index', {
	    issues: data.get_issues,
	    latest_issues: data.latest_issues,
	    banner_images: data.banner_images,
	    ideas: data.ideas,
	    suggestions: data.suggestions
	});
    });
};
