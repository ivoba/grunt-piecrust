# grunt-piecrust

> Run [PieCrust](http://bolt80.com/piecrust/) static publisher tasks

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-piecrust --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-piecrust');
```

## The "piecrust" task

### Overview
In your project's Gruntfile, add a section named `piecrust` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  piecrust: {
    options: {
      // Task-specific options go here.
    }
  },
})
```

### Options

#### options.path2chef
Type: `String`
Default value: ``

Filesystem path to chef

#### options.command
Type: `String`
Default value: ``

The command for chef

#### options.output
Type: `String`
Default value: ``

output dir for baked pages

#### options.root
Type: `String`
Default value: ``

root dir for piecrust pages

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  piecrust: {
    options: {
        path2chef: '/path/to/',
        command: 'bake',
        output: '/path/to/output',
        root: './test/fixtures/piecrust/'
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

v0.1.0: Initial Release.  
