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

class View {
  constructor(model, el) {
    this.el = el
    this.model = model
    this.model.event.attach((sender, data) => {
      this.show(data)
    })
  }
  show() {
    this.el.innerHTML = this.model.getValue()
  }
}

class FormView {
  constructor(model, el) {
    this.event = new Event(this)
    this.el = el
    this.model = model
    this.model.event.attach((sender, data) => {
      this.show(data)
    })
    this.el.addEventListener('change', (ev) => {
      console.log(ev, ev.target.value)
      this.event.notify(ev.target.value)
    }, false)
  }
  show() {
    this.el.value = this.model.getValue()
  }
}

class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
    this.view.event.attach((sender, data) => {
      this.updateModel(data)
    })
  }
  updateModel(data) {
    this.model.setValue(data)
  }
}

const m1 = new Model(123)
const v1 = new FormView(m1, document.getElementById('points-a'))
const v2 = new View(m1, document.getElementById('points-b'))
const c1 = new Controller(m1, v1)
setTimeout(function () {
  m1.setValue(1000)
}, 1000)
v1.show()
v2.show()