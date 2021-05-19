import { MessageEmbed, TextChannel, DMChannel, NewsChannel } from "discord.js";

export default class Message {
    public createMessage(message: TextChannel|DMChannel|NewsChannel, text: MessageEmbed|object|string) {

        let content: any;

        if (text instanceof Object) content = { embed   : text };
        if (text instanceof String) content = { content : text };

        return message.send(content);
    }
}