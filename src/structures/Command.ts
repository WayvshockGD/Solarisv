import { PermissionString } from "discord.js";
import ICommand from "../../interfaces/ICommand";
import Base from "./Base";

export default class Command extends Base implements ICommand {
    name              : string;
    description       : string;

    constructor(command: any) {
        super();

        this.name          = command || "";
        this.description   = command || "";
    }

    // execute() {
    //    throw new Error(`Method : execute not implemented in ${this.constructor.name}.`);
    //}
}