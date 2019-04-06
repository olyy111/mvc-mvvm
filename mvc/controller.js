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