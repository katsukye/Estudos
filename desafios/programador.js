
const linguagem = {
    propriedade: [
        { nome: 'C++', especialidade: 'Desktop' },
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile'}
    ]
  };

  const programador = {
      dados: [
          { nome: 'Carlos', idade: '32'},
          { nome: 'Fulano', idade: '25'}
      ]
  }
  console.log(`O usuário ${programador.dados[0].nome} tem ${programador.dados[0].idade} anos e usa a tecnologia ${linguagem.propriedade[0].nome} com especialidade em ${linguagem.propriedade[0].especialidade}`)