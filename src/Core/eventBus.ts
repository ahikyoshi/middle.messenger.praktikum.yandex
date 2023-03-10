class EventBus {

    listeners: any;

    constructor() {
        this.listeners = {};
    }

    on(event: string, callback: any) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
  }

    off(event: string, callback: any) {
        if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener: object) => listener !== callback
    );
  }

    emit(event: string, ...args: any) {
        if (!this.listeners[event]) {
                throw new Event(`Нет события: ${event}`);
        }

        this.listeners[event].forEach((listener: any) => {
            listener(...args);
        });
    }
}

export default EventBus;
