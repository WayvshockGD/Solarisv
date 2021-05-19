import { Message } from "discord.js";
import Solaris from "../src/core/Solaris";

export default interface CommandData {
    client: Solaris;
    message: Message;
    args: string[];
}