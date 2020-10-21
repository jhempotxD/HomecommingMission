var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

game.state.add('Boot', MissionHomecoming.Boot);
game.state.add('Preloader', MissionHomecoming.Preload);
game.state.add('MainMenu', MissionHomecoming.MainMenu);
game.state.add('Game', MissionHomecoming.Game);

game.state.start('Boot');
