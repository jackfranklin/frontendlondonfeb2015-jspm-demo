import qwest from 'qwest';
import _ from 'lodash';

import Handlebars from 'handlebars';
import Repo from './repo';
import template from './templates/main.hbs!text';

var getJSON = function(url) {
  return qwest.get(url).then(JSON.parse);
}

getJSON('https://api.github.com/orgs/gocardless/repos').then(function(repos) {
  var repoViews = _.map(repos, (repo) => new Repo(repo));
  var source = Handlebars.compile(template);
  var html = source({ repos: _.map(repoViews, (r) => r.render()) });
  document.body.innerHTML = html;
});

