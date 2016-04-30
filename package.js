Package.describe({
  name: 'meteor-line',
  summary: 'meteor package of https://github.com/tbem/jquery.line',
  version: '1.0.0',
  git: 'https://github.com/emirue/meteor-line'
});

var configure = function(api) {
  api.versionsFrom('1.3');
  api.use(['jquery'], 'client');

  api.addFiles('lib/jquery-line.js', 'client');
};

Package.onUse(function(api) {
  configure(api);
});
