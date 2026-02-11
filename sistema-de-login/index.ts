type StatusUsuario = "ativo" | "inativo" | "pendente";

interface Usuario{
   id: number;
   nome: string;
   email?: string;
   status: StatusUsuario;
}

const listaDeUsuarios: Usuario[] = [
   {
      id: 1,
      nome: "paulo",
      email: "pauloEmail@gmail.com",
      status: 'ativo'
   },
   {
      id: 1,
      nome: "paulo",
      email: "gabi@gmail.com",
      status: 'inativo'
   },
   {
      id: 1,
      nome: "paulo",
      email: "maely@gmail.com",
      status: 'pendente'
   }
]

listaDeUsuarios.forEach(usuario => {
   if(usuario.status === "pendente"){
      console.log(`${usuario.email} esta pendente. cheque seu email`)
   }
   else if(usuario.status === "inativo"){
      console.log(`${usuario.email} esta inativo. cheque seu email`)
   }

   console.log(`${usuario.email} esta ativo. bem vindo`)
})