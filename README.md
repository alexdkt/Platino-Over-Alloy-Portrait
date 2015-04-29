Non-official Platino template
=======================================
 
Non-official template to make games (in Portrait mode) using Platino Engine over an Alloy empty project. 

Facilitates the game integration in Alloy projects, permitting the use of underscore, backbone , alloy.js, config.js and constants like OS_IOS in your game code. 

-------------------------
Alloy + Platino directory
-------------------------

Here's how your Alloy directory is laid out.

models                  Model files go here
controllers             App controllers files go here
views                   App views go here.
styles                  App styles go here. 

widgets					pre-built, reusable components for your Alloy apps. 

assets > gameScenes     Game scenes go here.
assets > graphics       Game graphics & particles go here.
assets > sounds         Game sounds go here.
assets > levels         Game levels go here.

lib						Components go here

lib > gameView.js       GameView constructor
lib > sound.js          Helper component for audio handling
lib > gameView.js       Helper component for Chipmunk handling

config.json				The config.json file is where you can declare runtime contstants such as the game spritesheets, and widget dependencies.

Also, in the root is the alloy.jmk. Alloy.jmk acts like a makefile and can be used to hook into the Alloy compiler to customize the build process. 

Download Platino Engine : https://store.platino.io/
