const amqp = require('amqplib');
const billingService = require('./../services/billing.service.js')
//step 1 : Connect to the rabbitmq server
//step 2 : Create a new channel
//step 3 : Create the exchange
//step 4 : Create the queue
//step 5 : Bind the queue to the exchange
//step 6 : Consume messages from the queue

async function consumeMessages() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  await channel.assertExchange('logExchange', 'direct');

  const q = await channel.assertQueue('LogQueue');

  await channel.bindQueue(q.queue, 'logExchange', 'Log');

  channel.consume(q.queue,(msg) => {
    const data = JSON.parse(msg.content);
    if (data.logType == 'createOrder') {
      billingService.createBilling({orderId:data.message.id, totalAmount: Number(data.message.quantity * data.message.price), type:"Card" })
      channel.ack(msg);
    }
  });
}

consumeMessages();
