import { Message } from "discord.js";
import getConfig from "../core/config";
import Solaris from "../core/Solaris";

class CommandHander {
    constructor(message: Message, client: Solaris) {
        if (!message.content.startsWith(getConfig("prefix"))) return;

        let args = message.content.slice(getConfig("prefix").length).trim().split(" ");

        let command = client.commands.get(args[0]);

        if (!command) return false;

        args = args.slice(1);
        command.execute({ message, client, args });
    }
}

export default CommandHander;