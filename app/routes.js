module.exports = function(app) {
  app.get('*', function(req, res) {
    res.sendfile('./bin/index.html');
  });
};
