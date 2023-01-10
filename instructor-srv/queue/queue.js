const amqp = require("amqplib");

async function connectQueues(queues) {
    const amqpServer = "amqp://user:76gmj9UMKP@my-rabbit-rabbitmq.rabbit.svc.cluster.local:5672";
    connection = await amqp.connect(amqpServer).catch((err) => {
        console.log(err.message);
    });;
    channel = await connection.createChannel();

    queues.forEach(async queue => {
        await channel.assertQueue(queue)
    });

}

function sendtoQueue(queue, data) {
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)))
}


module.exports = { connectQueues, sendtoQueue };