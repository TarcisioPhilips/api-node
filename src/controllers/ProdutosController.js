/*Caso estivéssimos trabalhando com um banco de Dados (que tal no futuro?), aqui importaremos um modelo do 
que estamos trabalhando, isto é, quais informações e tipagens do produto que é armazenado. Com isso, 
conseguiríamos verdadeiramente checar no DB se existe o produto e etc. Contudo, sem perda de generalidade,
o código continua!*/
const crypto = require("crypto"); //cria um UNIQUE ID para simular aplicações reais

class ProdutosController {
  //RETORNA TODOS OS PRODUTOS
  async index(req, res) {
    res.status(200).send({
      mensagem: "Retorna TODOS os pedidos",
    });
  }

  async indexJustOne(req, res) {
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
  }

  async store(req, res) {
    const produto = {
      nome: req.body.nome,
      preco: req.body.preco,
    };

    const id = crypto.randomBytes(16).toString("hex");

    res.status(201).send({
      mensagem: "Produto Inserido",
      produtoCriado: produto,
      id: id,
    });

    return res.json(produtos);
  }

  async update(req, res) {
    const id = req.params.id_produto;

    res.status(201).send({
      mensagem: `Produto com id ${id} alterado com sucesso`,
    });
  }

  async destroy(req, res) {
    const id = req.params.id_produto;
    res.status(201).send({
      mensagem: "Produto deletado",
    });
  }
}

module.exports = new ProdutosController();
