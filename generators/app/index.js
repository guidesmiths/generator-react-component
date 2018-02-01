
const yeoman = require('yeoman-generator');
const _ = require('lodash');
const yosay = require('yosay');
const fs = require('fs');
const path = require('path');

const templatesFolder = path.join(__dirname, 'templates');

module.exports = yeoman.Base.extend({
  prompting: function() {
    return this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Your component name',
      default: 'ReactComponent'
    }]).then(function(answers) {
      this.props = answers;
    }.bind(this));
  },
  writing: function() {
    this._copyFiles('hello.txt', 'hello.js');
  },
  end: function() {
    var outputMsg = `\n\nYour react component ${this.props.name} has been created.`;
    this.log(yosay(outputMsg));
  },
  _copyFiles: function(from, to) {
    this.props.nameUp = this._capitalizeFirstLetter(this._toCamelCase(this.props.name));
    this.fs.copyTpl(this.templatePath('name.component.js'), this.destinationPath(this.props.name+'.component.js'), this.props);
    this.fs.copyTpl(this.templatePath('name.container.js'), this.destinationPath(this.props.name+'.container.js'), this.props);
    this.fs.copyTpl(this.templatePath('name.stories.js'), this.destinationPath(this.props.name+'.stories.js'), this.props);
    this.fs.copyTpl(this.templatePath('name.css'), this.destinationPath(this.props.name+'.css'), this.props);
    this.fs.copyTpl(this.templatePath('mock-data.json'), this.destinationPath('mock-data.json'), this.props);
  },
  _toCamelCase: function(str) {
    return str
    .replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
    .replace(/\s/g, '')
    .replace(/^(.)/, function($1) { return $1.toLowerCase(); });
  },
  _capitalizeFirstLetter: function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
});
