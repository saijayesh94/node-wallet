const validateInput = (Schema) => (req, res, next) => {
  try {
    const inputValidation = Schema.safeParse(req.body)
    console.log("inputvalidation", inputValidation)
    if (inputValidation?.success !== true) {
      return res.json({ message: ` hgjh ${inputValidation?.data}` })
    }
    req.body = inputValidation.data
    next()
  } catch (err) {
    res.status(400).json({ message: "please enter vaild data" })
    // res.status(400).json({ message: err })
  }
}

export default validateInput