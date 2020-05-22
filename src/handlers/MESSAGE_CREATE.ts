import Client from "../client/Client.ts";
import { Payload } from "../constants/Payloads.ts";
import { Events } from "../constants/Events.ts";
import { MessageType } from "../typedefs/MessageType.ts";
import { buildMessage } from '../utils/resolvers.ts';

export default async function (client: Client, payload: Payload) {
  const { d: message_payload } = payload;
  const message = await buildMessage(client, message_payload);
  message.channel.messages.set(message.id, message);
  console.log('Cached Message ' + message.id);
  client.emit(Events.MESSAGE_CREATE, message);
}
