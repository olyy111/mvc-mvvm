class Event {
  constructor(sender) {
    this.sender = sender
    this.listeners = []
  }
  attach(fn) {
    this.listeners.push(fn)
  }
  notify(arg) {
    this.listeners.forEach(listener => {
      listener(this.sender, arg)
    })
  }
}