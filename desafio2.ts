enum Profissao{
    // Atriz,
     Padeiro,
     Cabelereiro,
     EngenheirO
 }
 interface pessoa {
     nomeI: string;
     idadeI: number;
     profissao: Profissao;
 }
 const pessoa1: pessoa ={
     nomeI: 'daniel',
     idadeI:  24,
     profissao: Profissao.EngenheirO
 }
 const pessoa2: pessoa ={
     nomeI: 'maria',
     idadeI: 29,
     profissao: Profissao.Cabelereiro
 }
 const pessoa: {nome: string, idade: number, profissao: Profissao} ={
     nome:  'carol',
     idade: 23,
     profissao: Profissao.Porteiro
 }
 console.log(pessoa)
 
