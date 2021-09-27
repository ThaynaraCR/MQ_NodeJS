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

        channel.consume(queue, (msg)=>{
            console.log(`Mensage received is : ${msg.content}`)
        }
        //incluir caso queira eliminar mensagens ja enviadas
        // ,   
        // {
        //     noAck:true
        // }
        )
    })
})