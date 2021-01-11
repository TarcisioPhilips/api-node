const express = require("express");
const router = express.Router();

//RETORNA TODOS OS PRODUTOS
router.get("/", (req, res, next) => {
  res.status(200).send({
    mensagem: "Retorna todos os pedidos",
  });
});
//INSERE UM PRODUTO
router.post("/", (req, res, next) => {
  const produto = {
    nome: req.body.nome,
    preco: req.body.preco,
  };
  res.status(201).send({
    mensagem: "produto Inserido",
    produtoCriado: produto,
  });
});

//RETORNA OS DADOS DE UM PRODUTO
router.get("/:id_produto", (req, res, next) => {
  const id = req.params.id_produto;

  if (id === "especial") {
    res.status(200).send({
      mensagem: "Voce descobriu o id especial",
      id: id,
    });
  } else {
    res.status(200).send({
      mensagem: "Você passou um ID",
      id: id,
    });
  }
});

//ALTERA UM PRODUTO
router.patch("/", (req, res, next) => {
  res.status(201).send({
    mensagem: "Produto alterado",
  });
});

//EXCLUI UM PRODUTO
router.delete("/", (req, res, next) => {
  res.status(201).send({
    mensagem: "Produto deletado",
  });
});

module.exports = router;
