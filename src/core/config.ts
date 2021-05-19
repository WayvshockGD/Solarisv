type configs = "token" | "prefix";

export default function getConfig(item: configs) {
    let items = {
        token: "<token>",
        prefix: "s!"
    };

    return items[item];
}
