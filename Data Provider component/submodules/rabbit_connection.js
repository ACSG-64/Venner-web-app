const amqplib = require('amqplib');

var amqp_url = 'amqps://knuafcvn:B0NSPeYvE5mp2YzMucVrYb7Ppw6Tn_4D@fly.rmq.cloudamqp.com/knuafcvn';

async function connect_rabbitmq(){
  var conn = await amqplib.connect(amqp_url, "heartbeat=60");
  return conn;  
}

exports.connect_rabbitmq = connect_rabbitmq;