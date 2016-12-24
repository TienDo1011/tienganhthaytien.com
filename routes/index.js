var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tieng anh thay Tien' });
});
router.get('/test-dau-vao', function(req, res, next) {
  res.render('test-dau-vao', { title: 'Tieng anh thay Tien' });
});
router.get('/dang-ky-hoc', function(req, res, next) {
  res.render('dang-ky-hoc', { title: 'Tieng anh thay Tien' });
});
router.get('/cach-hoc-link-tai-phim', function(req, res, next) {
  res.render('cach-hoc-link-tai-phim', { title: 'Tieng anh thay Tien' });
});
router.get('/phim', function(req, res, next) {
  res.render('phim', { title: 'Tieng anh thay Tien' });
});
router.get('/truyen', function(req, res, next) {
  res.render('truyen', { title: 'Tieng anh thay Tien' });
});
router.get('/luyen-nghe', function(req, res, next) {
  res.render('luyen-nghe', { title: 'Tieng anh thay Tien' });
});
router.get('/lien-he', function(req, res, next) {
  res.render('lien-he', { title: 'Tieng anh thay Tien' });
});

module.exports = router;
