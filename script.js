const AnoActual = new Date();
const DAY = document.querySelector('#dia');
const MONTH = document.querySelector('#Mes');
const YEAR = document.querySelector('#Ano');
const btn = document.querySelector('#btn');
const form = document.querySelector('.form')
const Input= document.getElementsByTagName('input')
const label = document.getElementsByTagName('label')
const spans =document.getElementsByTagName('span')

form.addEventListener('submit', (event) => {
   event.preventDefault();
 
})
/*Função erro */
const setError=(index)=>{
   Input[index].style.border='2px solid red'
   label[index].style.color='red'
   spans[index].style.display = 'block '
}
/*Função remover erro */
const removeError=(index)=>{
   Input[index].style.border=''
   label[index].style.color=''
   spans[index].style.display = 'none'
}
const ValidarAno=()=>{
   if(YEAR.value ==''){
      setError(2)
   }else{
      removeError(2);
      CalcularAno();
   }if(YEAR.value > AnoActual.getFullYear()){
      setError(2)
   }
ValidarMes()
}
const ValidarMes=()=>{
   if(MONTH.value==''){
      setError(1)
   }else{
      removeError(1)
      CalcularMes()
   }if(MONTH.value < 0 || MONTH.value > 12){
     setError(1)
   }
ValidarDia()
}
const ValidarDia=()=>{
   if(DAY.value==''){
      setError(0)
   }else{
      removeError(0)
      CalcularDia()
   }if(DAY.value < 0 || DAY.value > 31){
     setError(0)
   }
}

const CalcularAno = (AnoTotal, headiline1) => {
   const AnoDeNascimento = YEAR.value;
   headiline1 = document.querySelector('#year');
   const CapturarAnoActual = AnoActual.getFullYear();
   AnoTotal = CapturarAnoActual - AnoDeNascimento;
   headiline1.innerHTML = AnoTotal;

}
const CalcularMes = (MesTotal, ConverterAnoEmMes) => {
   const AnoDeNascimento = YEAR.value;
   const MesDeNascimento = MONTH.value;
   ConverterAnoEmMes = (AnoActual.getFullYear() - AnoDeNascimento) * 12;
   MesTotal = (AnoActual.getMonth() - MesDeNascimento) + ConverterAnoEmMes;
   const headiline2 = document.querySelector('#month');
   headiline2.innerHTML = MesTotal;
   
}
const CalcularDia = (DiasTotal, headline3) => {
   const AnoDeNascimento = YEAR.value;
   const AnoDeVida = (AnoActual.getFullYear() - AnoDeNascimento);
   DiasTotal = (AnoDeVida * 365) + DAY.value;
   headline3 = document.querySelector('#day');
   headline3.innerHTML = DiasTotal;
}


btn.addEventListener('click',ValidarAno);










