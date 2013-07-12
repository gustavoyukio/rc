requirejs.config({
    "baseUrl": "assets/js/libs/",
    "paths": {
      "app": "app"
    },
    "shim": {
    }
});

// Load the main app module to start the app
requirejs(["../main"]);