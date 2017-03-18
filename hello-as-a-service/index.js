const micro = require('micro')
const cmd = require('node-cmd')

const info = () => new Promise((resolve, reject) => {
  cmd.get('ifconfig', (data) => {
    resolve(data)
  });
})

const server = micro(async (req, res) => {
  return await info()
})

server.listen(3000)
