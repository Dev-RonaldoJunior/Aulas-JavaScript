var numero = 1545.5;
const valorFormatadoBRL = numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
console.log(valorFormatadoBRL);