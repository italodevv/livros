import Livro from "../modelo/Livros"

var livros: Array<Livro> = [


  {
    
    codigo: 1,
    codEditora: 1,
    titulo: 'O Jardim Secreto',
    resumo: 'Uma menina solitária descobre um jardim mágico escondido em uma mansão sombria, e aprende a cultivar amizade e beleza na vida.',
    autores: ['Filipe Mendes', 'Moisés']
  },


  {

    codigo: 2,
    codEditora: 2,
    titulo: 'O Caçador de Sonhos',
    resumo: 'Um jovem aventureiro viaja pelo mundo em busca dos sonhos das pessoas, e encontra muito mais do que esperava no caminho.',
    autores: ['Ariadne', 'Myke']
  },


  {

    codigo: 3,
    codEditora: 3,
    titulo: 'A Fúria dos Mares',
    resumo: 'Uma tripulação de piratas tem que enfrentar inimigos poderosos, forças sobrenaturais e segredos sombrios em busca do tesouro final.',
    autores: ['Luffy']
  },


]

export default class ControleLivro {
  livros = livros

  obterLivros() {
    return livros
  }
  incluir(livro: Livro) {
    try {
      var codigo: number = (this.livros.length - 1);
      livro.codigo = this.livros[codigo].codigo + 1;
      this.livros.push(livro);
    }
    catch {
      livro.codigo = 1;
      this.livros.push(livro);
    }
  }
  excluir(num: Number) {
    var livroEncontrado = this.livros.findIndex((livro: Livro) => {
      return num === livro.codigo
    });
    this.livros.splice(livroEncontrado, 1)
  }
}