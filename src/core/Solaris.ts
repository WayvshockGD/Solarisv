import Discord, { Client, Collection } from "discord.js";
import CommandHander from "../handlers/CommandHandler";
import CommandLoader from "./collections/CommandLoader";
import config from './config';

let options: {} = {
        messageCacheMaxSize: 35,
        messageEditHistoryMaxSize: 45,
        messageSweepInterval: 60000,
        disableMentions: "everyone",
        allowedMentions: {
            parse: ["roles", "users"]
        }
}

export default class Solaris extends Client {

    /** The thing used for loading and calling commands. */
    commands: Collection<string, any>

    /** The thing **Loading** all the commands. */
    CommandCollection: CommandLoader;

    constructor() {
        super(options);

        this.commands = new Collection();

        this.CommandCollection = new CommandLoader();
        this.CommandCollection.loadCommands(this);

        this.on("message", (message) => this.onMessage(message));

        this.onInt();
    }

    public onMessage(message: Discord.Message) {
        new CommandHander(message, this);
    }

    public onInt() {
        this.on("ready", () => {
            console.log("Ready");
        })
    }

    public setStatus() {
        this.user?.setPresence({ "status": "dnd" });
    }
    
    public connect() {
        this.login(config('token'));
    }
}