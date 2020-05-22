import { GuildChannel } from './../models/channels/GuildChannel.ts';
import Client from "../client/Client.ts";
import { Payload } from '../constants/Payloads.ts';
import { Events } from './../constants/Events.ts';
import Guild from '../models/Guild.ts';
import { buildTextChannel } from '../utils/resolvers.ts';

export default async function (client: Client, payload: Payload) {
    const { d: guildChannel } = payload
    if (client.channels.has(payload.d.id)) {
        const cachedGuildChannel = client.channels.get(guildChannel.id);
        client.emit(Events.CHANNEL_CREATE, cachedGuildChannel);
    } else {
        let guild;
        if (client.guilds.has(payload.d.guild_id)) {
            const cachedGuildChannel = client.guilds.get(payload.d.guild_id);
            guild = cachedGuildChannel;
        } else {

        }
        guild = await client.rest.fetchGuild(payload.d.guild_id);)
        const now = performance.now();
        let channelResponse = await client.rest.fetchChannel(guildChannel.id);
        console.log(channelResponse);
        
    }
    client.emit(Events.CHANNEL_CREATE, guildChannel);
}