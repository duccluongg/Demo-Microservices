const amqp = require('amqplib');

//step 1 : Connect to the rabbitmq server
//step 2 : Create a new channel
//step 3 : Create the exchange
//step 4 : Create the queue
//step 5 : Bind the queue to the exchange
//step 6 : Consume messages from the queue

async function consumeMessages() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  await channel.assertExchange('eventExchange', 'direct');

  const q = await channel.assertQueue('LogQueue');
  console.log(q.queue);
  await channel.bindQueue(q.queue, 'eventExchange', 'Log');

  channel.consume(q.queue, (msg) => {
    const data = JSON.parse(msg.content);
    if (data.logType == 'auth') {
      if (!data.message) channel.nack(msg);
      try {
        channel.ack(msg);
      } catch (err) {
        
        channel.reject(msg);
      }
    }
  });
}

consumeMessages();
