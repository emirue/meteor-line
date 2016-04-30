Package.describe({
  name: 'meteor-line',
  summary: 'meteor package of https://github.com/tbem/jquery.line',
  version: '1.0.0',
  git: 'https://github.com/emirue/meteor-line'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['jquery'], 'client');

  api.addFiles([
    'lib/jquery-line.js'
  ], 'client');
});
