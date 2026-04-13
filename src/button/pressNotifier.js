class PressMessage {
  constructor(user) {
    this.user = user;
  }
}

class PressEventNotifier {
  events = [];
  handlers = [];

  constructor() {
    let port = window.location.port;
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss'; // use ws/wss depending on whether using http/https
    this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`); // instantiate websocket on "ws(s)://youmustnot.click:3000/ws"

    this.socket.onmessage = async (msg) => {
      try {
        const event = JSON.parse(await msg.data.text());
        this.receivePress(event);
      } catch { console.error("oops"); } // TODO: why don't we do nothin'?
    };
  }

  broadcastPress(user) {
    const event = new PressMessage(user);
    this.socket.send(JSON.stringify(event));
  }

  // TODO: wtf is a handler??

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers = this.handlers.filter((h) => h !== handler);
  }

  receivePress(event) {
    this.events.push(event);
    this.handlers.forEach((handler) => handler(event));
  }
}

const PressNotifier = new PressEventNotifier();
export { PressNotifier };
