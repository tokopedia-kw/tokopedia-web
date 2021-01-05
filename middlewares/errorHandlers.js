const errorHandlers = (err, req, res, next) => {
  if (err) {
    switch (err.name) {
      case "SequelizeValidationError":
        let errorMessages = err.errors.map(err => {
          return {
            message: err.message,
            column: err.path
          }
        })
        res.status(400).json(errorMessages)
        break;
      case "resourceNotFound":
        res.status(404).json(err.message)
        break
      case "pageNotFound":
        res.status(404).render('views/404')
        break
      case "resourceNotFound":
        break
      default:
        res.status(500).json({ message: "Internal Server Error" })
        break;
    }
  }
}

module.exports = errorHandlers