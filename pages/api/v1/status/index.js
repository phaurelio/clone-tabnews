function status(request, response) {
  response
    .status(200)
    .json({ chave: "vou conseguir trabalhar com algo que eu goste até 2028!" });
}

export default status;
