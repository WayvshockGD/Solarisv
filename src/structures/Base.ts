import Message from "./Message";

export default class Base {
    get message() {
        return new Message();
    }
}