class PressMessage {
  constructor(name) {
    this.name = name;
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
        this.receiveEvent(event);
      } catch {} // TODO: why don't we do nothin'?
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
    this.handlers.filter((h) => h !== handler);
  }

  receivePress(event) {
    this.events.push(event);

    this.events.forEach((e) => {
      this.handlers.forEach((handler) => {
        handler(e);
      });
    });
  }
}

const PressNotifier = new PressEventNotifier();
export { PressNotifier };
