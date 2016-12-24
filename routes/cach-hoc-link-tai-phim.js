var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cach-hoc-link-tai-phim', { title: 'Tieng anh thay Tien' });
});
router.get('/nguyen-tac-1', function(req, res, next) {
  res.render('nguyen-tac-1', { title: 'Tieng anh thay Tien' });
});
router.get('/nguyen-tac-2', function(req, res, next) {
  res.render('nguyen-tac-2', { title: 'Tieng anh thay Tien' });
});
router.get('/nguyen-tac-3', function(req, res, next) {
  res.render('nguyen-tac-3', { title: 'Tieng anh thay Tien' });
});
router.get('/nguyen-tac-4', function(req, res, next) {
  res.render('nguyen-tac-4', { title: 'Tieng anh thay Tien' });
});
router.get('/nguyen-tac-5', function(req, res, next) {
  res.render('nguyen-tac-5', { title: 'Tieng anh thay Tien' });
});
router.get('/hoc-phat-am', function(req, res, next) {
  res.render('hoc-phat-am', { title: 'Tieng anh thay Tien' });
});
router.get('/luyen-tap-phan-xa', function(req, res, next) {
  res.render('luyen-tap-phan-xa', { title: 'Tieng anh thay Tien' });
});
router.get('/hoc-tu-vung', function(req, res, next) {
  res.render('hoc-tu-vung', { title: 'Tieng anh thay Tien' });
});

module.exports = router;
