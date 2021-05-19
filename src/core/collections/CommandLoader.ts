import Solaris from "../Solaris";
import { join } from "path";
import glob from "glob";

class CommandLoader {
    async loadCommands(client: Solaris) {
        glob("./build/src/commands/**/*.js", function(error, files){
            files.forEach((file) => {
               // return console.log(file.split("./build/src")[1])
                let f = require(`../../${file.split("./build/src/")[1]}`);
                let command = new f.default();
                console.log(`Registered (${command.name})`);
                client.commands.set(command.name, command);
            })
        });
    }
}

export default CommandLoader;