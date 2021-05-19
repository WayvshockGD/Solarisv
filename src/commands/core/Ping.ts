import CommandData from "../../../data/CommandData";
import Command from "../../structures/Command";

class Ping extends Command {
    public name         :   string = "ping";
    public description  :   string = "Pings the bot's gateway.";

    async execute({ message, client }: CommandData) {
        let now = Date.now();

        return await message.channel.send('Pinging...').then(msg => {
            let diff = (Date.now() - now);
            let ping = (client.ws.ping / 1000);

            return msg.edit(`Bot Ping: \`${diff}\`ms\nAPI: \`${ping}\`ms`);
        })
    }
}

export default Ping;