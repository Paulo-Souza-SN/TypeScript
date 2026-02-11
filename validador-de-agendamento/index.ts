//const data = new Date();
//const ano = data.getFullYear();
//const mes = data.getMonth() + 1;
//const dia = data.getDate();

//console.log(`${dia}/${mes}/${ano}`)

interface Agendamento{
   client: string,
   scheduledData: Date
}

function checkData(agendamento: Agendamento){
   const todayData = new Date();
   const scheduledData = agendamento.scheduledData;

   if(scheduledData < todayData) {
      return `It's can't be possible. the scheduled data is earlier`
   }

   return `Appoiment successfully scheduled`
}

const client: Agendamento = {
   client: "Paulo",
   scheduledData: new Date("2026-03-09")
}

console.log(checkData(client))