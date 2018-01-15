
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
    this.fs.copy(this.templatePath('hello.txt'), this.destinationPath('hello.js'));
    this.fs.copyTpl(this.templatePath('hello.txt'), this.destinationPath('hello2.js'), this.props);
  }
});
