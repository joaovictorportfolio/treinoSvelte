//  import { getImageURLByKeyword } from "../services/UnsplashService";

const produtos = [];
const totalProdutos = 20;

for (let i = 1; i <= totalProdutos; i++) {
  const produto = {
    id: i,
    nome: `Produto ${i}`,
    categoria: `Categoria ${i}`,
    descricao:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus ab omnis vero eligendi recusandae.',
    preco: (Math.random() * (500 - 10) + 10).toFixed(2),
    isNew: Math.random() < 0.5,
    imagem:
      'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
  };
  produtos.push(produto);
}

export default produtos;
