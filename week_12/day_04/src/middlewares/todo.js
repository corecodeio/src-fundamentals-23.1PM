const todo = (request, response, next) => {
    response.status(200).json({ message: "todo" });
}

module.exports = todo;