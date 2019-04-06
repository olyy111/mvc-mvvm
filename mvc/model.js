class Model {
  constructor(value) {
    this.value = value
    this.event = new Event(this)
  }
  getValue() {
    return this.value
  }
  setValue(value) {
    this.value = value
    this.event.notify(this.value)
  }
}