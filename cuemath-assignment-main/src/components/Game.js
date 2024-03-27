import React, {useEffect} from 'react'
import io from 'socket.io-client'
import Phaser from 'phaser'
import GameScene from './GameScene' // Assume this is your Phaser game scene

const socket = io('http://localhost:3001') // Your server address

const Game = () => {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      parent: 'phaser-game',
      width: 800,
      height: 600,
      scene: [GameScene],
    }
    new Phaser.Game(config)

    // Socket.io events
    socket.on('connect', () => {
      console.log('Connected to the server.')
    })

    // Example event: Update game state based on server
    socket.on('gameStateUpdate', gameState => {
      // Handle game state update
      console.log(gameState)
    })

    // Cleanup on component unmount
    return () => {
      socket.off('connect')
      socket.off('gameStateUpdate')
      socket.disconnect()
    }
  }, [])

  return <div id="phaser-game"></div>
}

export default Game
