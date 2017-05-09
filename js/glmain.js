(function (){
   angular
       .module('app', []);

   app.glInit();
   app.draw();


    app.glInit() = function () {
        var that = this;

        canvas = document.getElementById("canvas");
        app.gl = canvas.getContext("webgl");
        app.gl.viewport(0, 0, canvas.clientWidth, canvas.clientHeight);
        app.gl.clearcolor(1, 1, 0, 1);
    }

        app.draw() = function () {

        app.gl.clear(gl.COLOR_BUFFER_BIT);
    }
})



initGL();
draw();
var gl;

function initGL() {
    var canvas = document.getElementById("canvas");
    gl = canvas.getContext("webgl");
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1, .5, 0, 1);
}

function draw() {
    gl.clear(gl.COLOR_BUFFER_BIT);
}
