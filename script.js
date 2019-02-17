console.log('Escada');

let lances = Number(prompt('Quantos lances de escada você gostaria de fazer?'));
let material = prompt('Qual o material?');
let degrau = material;
let i = 0;
while (i < lances){
    console.log(degrau);
    degrau += material;
    i++;
}