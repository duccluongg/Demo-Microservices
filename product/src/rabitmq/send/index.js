const rabbit = require('./../index')

const send = async (ctx) => {
  const broker = await rabbit.getInstance()
  await broker.send('test', Buffer.from(JSON.stringify(ctx.request.body)))
  ctx.body = ''
}

module.exports = {send}