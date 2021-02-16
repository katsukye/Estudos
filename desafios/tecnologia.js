const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] },
    { nome: "Liliane", tecnologias: ["CSS", "JavaScript"] }
  ];

  for(let usuario of usuarios){
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
  }

  function checaSeUsuarioUsaCSS(usuarios){
    for(let tecnologia of usuarios.tecnologias){
        if( tecnologia == "CSS") 
            return true
    }
    return false
  }

  for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])
    if (usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)}
  }