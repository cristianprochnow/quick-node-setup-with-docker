const express = require('express')

const app = express()

app.use( express.json() )

app.listen(3000)

app.get('/', (_, response) => {
  return response
    .status(200)
    .json({
      status: 'OK',
      message: 'Docker delicinha demais!'
    })
})
