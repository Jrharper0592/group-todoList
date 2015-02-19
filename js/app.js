window.onload = app;

// runs when the DOM is loaded
function app(){
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(
        //css
        {url: "./dist/style.css"} ,
        //js
        {url: "./bower_components/jquery/dist/jquery.min.js"} ,
        {url: "./bower_components/lodash/lodash.min.js"} ,
        {url: "./bower_components/backbone/backbone.js"} ,
        {url: "./js/TemplateView.js"} ,
        {url: "./js/router.js"} ,
        {url: "./js/collection.js"} ,
        {url: "./js/view.js"}
        // {url: "./bower_components/react/react.min.js"},
        // {url: "./node_modules/jsonx/index.js"},
        // {url: "./bower_components/pace/pace.min.js"},
    ).then(function(){
        document.querySelector("html").style.opacity = 1;
        // start app?
            new Backbone.todoRouter
            // new Backbone.todoView

    })

}