const express = require('express')
const dominantColourFromFiles = require('./dominantColourFromFiles');
const fs = require('fs');

const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/dominantColourFromFiles', async (req, res) => {
  const images = fs.readdirSync('./public/images')

  const colours = await dominantColourFromFiles(images)

  res.json([images, colours])
})

app.listen(port)
