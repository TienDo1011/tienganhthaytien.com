var request = require('request');
var cheerio = require('cheerio');
var mongoose = require('mongoose');
var async = require('async');
var DictData = require('../models/dict-data');

var data = '';

var sendResponse = function(res, status, content) {
  res.status(status);
  res.setHeader('Content-Type', 'application/json');
  res.end(content);
};

exports.dict = function(req, res, next) {
  var wordRequest = req.query.search;
  DictData
    .findOne({word: wordRequest})
    .exec(function(err, word) {
      if(word) {
        sendResponse(res, 200, JSON.stringify(word));
      } else {
        var url1 = 'http://www.oxfordlearnersdictionaries.com/definition/english/' + wordRequest;
        var url2 = 'http://www.1tudien.com/?w=' + wordRequest;

        async.parallel([
          function(cb) {
            request(url1, function(error, response, html) {
              if(!error) {
                var $ = cheerio.load(html);
                cb(null, $.html('.h-g'));
              }
            });
          },
          function(cb) {
            request(url2, function(error, response, html) {
              if(!error) {
                var $ = cheerio.load(html);
                $('#divDictDetail1').attr('onmouseup', null).attr('onmousemove', null);
                cb(null, $.html('#divDictDetail1'));
              }
            });
          }
        ], function(err, results) {
          console.log(results[1]);
          DictData.create({
            word: wordRequest,
            oaldData: results[0],
            evData: results[1]
          }, function(err, data) {
            sendResponse(res, 200, JSON.stringify(data));
          });
        });
      }
    });
}
