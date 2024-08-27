# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

> 💡 These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens.

## Colors

### Primary

- Purple: hsl(259, 100%, 65%)
- Light red: hsl(0, 100%, 67%)

### Neutral

- White: hsl(0, 0%, 100%)
- Off white: hsl(0, 0%, 94%)
- Light grey: hsl(0, 0%, 86%)
- Smokey grey: hsl(0, 1%, 44%)
- Off black: hsl(0, 0%, 8%)

## Typography

### Body Copy

- Font size (inputs): 32px

### Font

- Family: [Poppins](https://fonts.google.com/specimen/Poppins)
- Weights: 400i, 700, 800i

> 💎 [Upgrade to Pro](https://www.frontendmentor.io/pro?ref=style-guide) for design file access to see all design details and get hands-on experience using a professional workflow with tools like Figma.


const AnoActual = new Date("2024-8-16");
const AnoDeNascimento = new Date("2005-4-4");

/*Para Calcular Ano de vida e so subtair o Ano actual pelo ano de nascimento*/

const CalcularAno = () => {
    const AnoTotal = AnoActual.getFullYear() - AnoDeNascimento.getFullYear();
    console.log(AnoTotal);
}

/*Função que calcular Mes */
const CalcularMes = () => {
    const Mes = (AnoActual.getFullYear() - AnoDeNascimento.getFullYear())*12;
    const MesTotal =(AnoActual.getMonth()-AnoDeNascimento.getMonth())+Mes;
    console.log(MesTotal)
}
/*Função que calcular dias */
const CalcularDia = () => {
    const Ano = AnoActual.getFullYear() - AnoDeNascimento.getFullYear();
    const DiaTotal =  365*Ano
    console.log()
}

console.log(CalcularAno());
console.log(CalcularMes())
console.log(CalcularDia())