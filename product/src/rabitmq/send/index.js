const rabbit = require('./../index')

const send = async (ctx) => {
  console.log(ctx.body)
  const broker = await rabbit.getInstance()
  // await broker.send({
  // topic: 'test-channel-data-topic',
  // messages: [
  //  { value: Buffer.from(JSON.stringify(ctx.body))}
  // ],
  // });  
  // await broker.send('test', Buffer.from(JSON.stringify(ctx.request.body)))
  await broker.send(
    'test-channel-data-topic',Buffer.from(JSON.stringify(ctx.body))
 ); 
  ctx.body = ''
}

module.exports = {send}