import pika

def data_publish(msg, connection):

  channel = connection.channel()

  channel.basic_publish(exchange="venner",
                              routing_key="report-generated",
                              body=str(msg))
  channel.close()