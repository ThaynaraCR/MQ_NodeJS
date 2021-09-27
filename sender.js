const amqp = require("amqplib/callback_api")

amqp.connect("amqp://localhost", (connError, connect)=>{
    if(connError){
        throw connError
    }

    connect.createChannel((channelError, channel)=>{
        if(channelError){
            throw channelError
        }

        const queue = "codingTest"
        channel.assertQueue(queue)
        channel.sendToQueue(queue, Buffer.from("Hello from! its coding Time!"))
        console.log( `Message is send! ${queue}`)
    })
})