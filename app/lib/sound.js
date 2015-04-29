var platino = require('co.lanica.platino');
var ALmixer = platino.require('co.lanica.almixer');

var music = null;
var sound = null;


exports.loadSounds = function(){
	
	// Load all sounds in cache :
	//music = ALmixer.LoadAll('sounds/music.mp3');
	//sound = ALmixer.LoadAll('sounds/sound.mp3');
	
};

exports.playMusic = function(){
	ALmixer.PlayChannel(music, -1);
};

exports.playSound = function(){
	ALmixer.PlayChannel(sound);
};


/*
exports.playSound = function(sound){

	ALmixer.PlayChannel(sound);
};

exports.playMusic = function(music){
	
	ALmixer.PlayChannel(music,-1);
};

exports.stopMusic = function(sound){
	ALmixer.HaltChannel(0);
};
*/

