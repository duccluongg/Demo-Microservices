const amqp = require('amqplib');

//step 1 : Connect to the rabbitmq server
//step 2 : Create a new channel on that connection
//step 3 : Create the exchange
//step 4 : Publish the message to the exchange with a routing key

class Producer {
  channel;

  async createChannel() {
    const connection = await amqp.connect("amqp://localhost");
    this.channel = await connection.createChannel();
  }

  async publishMessage(routingKey, message) {
    if (!this.channel) {
      await this.createChannel();
    }
    await this.channel.assertExchange("logExchange", 'direct');

    const logDetails = {
      logType: routingKey,
      message: message,
      dateTime: new Date(),
    };
    await this.channel.sendToQueue(
      'LogQueue',
      Buffer.from(JSON.stringify(logDetails))
    );
  
    console.log(`The new ${message} log is sent to exchange ${"logExchange"}`);
  }
}

module.exports = Producer;
