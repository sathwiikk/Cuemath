const express = require('express')
const http = require('http')
const socketIo = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketIo(server)

app.use(express.static('build')) // If you're serving your React build directory

io.on('connection', socket => {
  console.log('New client connected')

  socket.on('moveRook', data => {
    // Broadcast move to other clients
    socket.broadcast.emit('rookMoved', data)
  })

  socket.on('disconnect', () => {
    console.log('Client disconnected')
  })
})

const port = process.env.PORT || 4000
server.listen(port, () => console.log(`Listening on port ${port}`))
