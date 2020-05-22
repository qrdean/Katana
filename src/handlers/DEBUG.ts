import Client from "../client/Client.ts";
import { Payload } from '../constants/Payloads.ts';
import { Events } from './../constants/Events.ts';

export default async function (client: Client, payload: Payload) {
    client.emit(Events.DEBUG, payload);
}