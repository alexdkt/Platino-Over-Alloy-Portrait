/*
 * MainScene. 
 */

// Import required modules as statics variables (Outside MainScene function)

var platino = require('co.lanica.platino');

require('co.lanica.chipmunk2d');
var chipmunk = co_lanica_chipmunk2d;
var v = chipmunk.cpv;

// MainScene constructor :

function MainScene(window, game) {

	/*
	 * VAR DEFINITIONS, DECLARATIONS AND ASSIGNMENTS :
 	*/

	// Declare the scene:
	
	var self = platino.createScene();
	self.addEventListener('activated', onSceneActivated);
	
	// Scene background color to white :
	
	self.color(1,1,1);
	
	// Vars :
	
	var World = require('world');
	var TICKS_PER_SECOND = game.fps*3;		
	var space = null;
	var _accumulator = 0.0;
	var gravity = -2000;
	var constantGravity = 0.005*gravity;	// Constant for missile trajectory prediction (created in lib/bomb.js)
	
	var Sound = require('sound');

	/*
	 * OTHER
	 */
	
	var cpY = game.cpY;
	
	var cpX = game.cpX;
	
	var cpAngle = game.cpAngle;
	
	/*
	 * SCENE LISTENERS
	 */
	
    function onSceneActivated(e) {
    	
    	// When scene is activated, starts the creation of all objects
    	
        Ti.API.info("Main scene is activated");		
		
		doSomething();

		game.startCurrentScene();

    };


	
	function doSomething(){
		
	

	};


	
    return self;
};


module.exports = MainScene;



