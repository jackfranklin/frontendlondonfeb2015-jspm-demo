System.config({
  "baseURL": "/",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "handlebars": "github:components/handlebars.js@3.0.0",
    "lodash": "npm:lodash@3.3.0",
    "qwest": "npm:qwest@1.5.4",
    "text": "github:systemjs/plugin-text@0.0.2",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.0"
    },
    "npm:lodash@3.3.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:qwest@1.5.4": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.1"
    }
  }
});

