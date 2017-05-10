
glInit();

var gl_int = (function (){

   glInit();
   draw();


    glInit() = function (){
        var that = this;

        var canvas = document.getElementById("canvas");
        var gl = canvas.getContext("webgl");
        gl.viewport(0, 0, canvas.clientWidth, canvas.clientHeight);
        gl.clearcolor(1, 1, 0, 1);
    }

        draw() = function () {

        gl.clear(gl.COLOR_BUFFER_BIT);
    }
})



/*initGL();
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
}*?
