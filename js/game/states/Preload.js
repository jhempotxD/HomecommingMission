MissionHomecoming.Preload = function() {
  this.ready = false;
};

MissionHomecoming.Preload.prototype = {
  preload: function(){

    this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY - 100, 'logo');
    //this.splash.anchor.setTo(0.5);
    this.splash.scale.setTo(0.5);
    this.preloadBar = this.add.sprite(this.game.world.centerX - 150, this.game.world.centerY , 'preloadbar');
    this.preloadBar.scale.setTo(0.5);
    this.splash.anchor.setTo(0.5);


    this.load.setPreloadSprite(this.preloadBar);

    //this.load.image('ground', 'assets/images/ground.png');
    this.load.image('background', 'assets/images/background.png');
    this.load.image('banner', 'assets/images/banner.png');
    //this.load.image('foreground', 'assets/images/foreground.png');

    this.load.image('coins', 'assets/images/powerup.png ',51,51,7);
    this.load.image('player', 'assets/images/astronaut.png', 229, 296,4);
    this.load.image('missle', 'assets/images/asteroid.png', 361,218,4);

    this.load.audio('gameMusic', ['assets/audio/gameMusic.mp3']);
    //this.load.audio('rocket', 'assets/audio/rocket.wav');
    //this.load.audio('bounce', 'assets/audio/bounce.wav');
    this.load.audio('coin', 'assets/audio/PowerUp.mp3');
   this.load.audio('death', 'assets/audio/death.mp3');

    this.load.bitmapFont('minecraftia', 'assets/fonts/minecraftia/minecraftia.png', 'assets/fonts/minecraftia/minecraftia.xml');

    this.load.onLoadComplete.add(this.onLoadComplete , this);
  },
  create: function() {
    this.preloadBar.cropEnabled = false;
  },
  update: function(){
    if(this.cache.isSoundDecoded('gameMusic') && this.ready === true){
      this.state.start('MainMenu')
  }
},
onLoadComplete: function() {
  this.ready = true;
  }
};
