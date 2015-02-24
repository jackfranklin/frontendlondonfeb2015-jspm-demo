import Handlebars from 'handlebars';
import template from './templates/repo.hbs!text';

export default class Repo {
  constructor(obj) {
    this.raw = obj;
  }

  render() {
    var source = Handlebars.compile(template);
    var html = source(this.raw);
    return html;
  }
}
