import Phaser from 'phaser'

class GameScene extends Phaser.Scene {
  constructor() {
    super('game')
  }

  preload() {
    // Load your assets, e.g., the rook
    this.load.image('rook', 'path/to/rook.png')
  }

  create() {
    // Initial scene setup, display the rook, etc.
    this.rook = this.add.sprite(400, 300, 'rook')
  }

  update() {
    // Game loop, handle movement, etc.
  }
}

export default GameScene
