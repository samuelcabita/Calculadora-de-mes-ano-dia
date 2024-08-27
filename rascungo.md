const CalcularAno = (AnoTotal, headiline1) => {
   const AnoDeNascimento = YEAR.value;
   headiline1 = document.querySelector('#year');
   const CapturarAnoActual =AnoActual.getFullYear();
   AnoTotal =  CapturarAnoActual - AnoDeNascimento;
   headiline1.innerHTML = AnoTotal;
}

const CalcularMes = (MesTotal, ConverterAnoEmMes) => {
   const MesDeNascimento = MONTH.value
   ConverterAnoEmMes = (AnoActual.getFullYear() - AnoDeNascimento) * 12;
   MesTotal = (AnoActual.getMonth() - MesDeNascimento) + ConverterAnoEmMes;
   const headiline2 = document.querySelector('#month');
   headiline2.innerHTML=MesTotal;

}
const CalcularDia = (DiasTotal,headline3) => {
   const AnoDeVida =(AnoActual.getFullYear()-AnoDeNascimento);
   DiasTotal = (AnoDeVida*365)+DAY.value
   headline3 = document.querySelector('#day');
   headline3.innerHTML=DiasTotal;
}