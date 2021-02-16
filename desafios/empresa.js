const usuario = {
    nome: "Diego",
    empresa: {
      nome: "Rocketseat",
      cor: "Roxo",
      foco: "Programação",
      endereço:{
        rua: "Rua Guilherme Gembala",
        número: "260"
      }
    }
  }
  console.log(`A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.endereço.rua},${usuario.empresa.endereço.número}`)