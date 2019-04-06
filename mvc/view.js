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