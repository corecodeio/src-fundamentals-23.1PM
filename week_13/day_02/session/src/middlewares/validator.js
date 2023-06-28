const patchValidator = (req, res, next) => {
  const { title, description, isDone } = req.body;
  if (
    typeof title == "undefined" ||
    typeof description == "undefined" ||
    typeof isDone == "undefined"
  ) {
    return res.status(400).json({ message: "faltaron datos o son invalidos" });
  }
  console.log(isDone)
  //Number() true --> 1 / flase--->0;
  //Boolean() 0 -->false / 1 -->true
  req.body.isDone = Number(req.body.isDone)
  next();
};

module.exports = {
  patchValidator,
};
