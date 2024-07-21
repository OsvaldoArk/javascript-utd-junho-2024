//nome, idade, salario,tem curso superior, qual produto consome,
// pretende comprar presente no dia das mães , estimativa de gastos, 
//mantém uma reserva para gastos inesperados?
const pesquisa = [
    ["ana",24,3000,true,"a",true,250,true],
    ["lúcia",35,4200, false, "b",false,0,true],
    ["carlos",19,1460,false,"a",true,150,false],
    ["carla",24,1800,false,"c",true,100,false],
    ["armando",27,0,true,"a",false,0,false],
    ["jorge",41,3800,false,"c",false,0,false],
    ["ronaldo",50,4000,true,"b",true,400,true],
    ["sara",42,3200,true,"b",false,0,true],
    ["arlindo",32,1950,true,"a",true,200,false],
    ["livia",18,2400,false,"a",true,140,false],
    ["evanilda",27,3000,false,"b",false,0,false]
]

var somaIdades = 0,qtdA = 0, qtdB = 0, qtdC = 0,somaNSr=0,somaSSr=0,qtdNS=0,qtdSS=0;
var qtdCompraDDM = 0,somaGastoDDM = 0, qtdPRE = 0, maisVelho = 0, maisVelhoNome = '';
var maisNovo = 0, maisNovoNome = '', somaIdadeNS = 0, somaIdadeSS = 0;

for(var linha = 0; linha < pesquisa.length; linha++){
    for(var col = 0; col < pesquisa[linha].length; col++){
        
        if(col === 1){ 
            somaIdades+= pesquisa[linha][col];

            if(pesquisa[linha][col] > maisVelho){
                maisVelho = pesquisa[linha][col];

                maisVelhoNome = pesquisa[linha][0];
            }

            if(linha === 0){
                maisNovo = pesquisa[linha][col];

                maisNovoNome = pesquisa[linha][0];
            }else{
                if(pesquisa[linha][col] < maisNovo){
                    maisNovo = pesquisa[linha][col];

                    maisNovoNome = pesquisa[linha][0];
                }
            }
        }

        if(col === 3 && pesquisa[linha][col]==true){
            qtdNS++;

            somaNSr+=pesquisa[linha][2];

            somaIdadeNS+=pesquisa[linha][1];
        }
        else if(col === 3 && pesquisa[linha][col]==false){
            qtdSS++;

            somaSSr+=pesquisa[linha][2];

            somaIdadeSS+=pesquisa[linha][1];
        }

        if(col === 4){

            var produto = pesquisa[linha][col];

            switch(produto){
                case "a": qtdA++; break;
                case "b": qtdB++; break;
                case "c": qtdC++; break;
            }
        }

        if(col === 5 && pesquisa[linha][col] === true){

            qtdCompraDDM++;

            somaGastoDDM+=pesquisa[linha][6];
        } 

        if(col === 7 && pesquisa[linha][col]=== true) qtdPRE++;
    }
}

console.log("a média das idades é: "+(somaIdades)/pesquisa.length);

if(qtdA > qtdB){

    if(qtdA > qtdC){
        
        if(qtdB > qtdC){
            console.log("1º lugar A:"+qtdA+" 2º lugar B: "+qtdB+" 3º lugar C: "+qtdC);
        }else{
            console.log("1º lugar A:"+qtdA+" 2º lugar C: "+qtdC+" 3º lugar B: "+qtdB);
        }
    }else{
       
        console.log("1º lugar C:"+qtdC+" 2º lugar A: "+qtdA+" 3º lugar B: "+qtdB); 
    }
}else if(qtdB > qtdC){

    if(qtdC > qtdA){
        console.log("1º lugar B:"+qtdB+" 2º lugar C: "+qtdC+" 3º lugar A: "+qtdA);
    }else{
        console.log("1º lugar B:"+qtdB+" 2º lugar A: "+qtdA+" 3º lugar C: "+qtdC);
    }
    
}else{
    if(qtdA > qtdB){
        console.log("1º lugar C:"+qtdC+" 2º lugar A: "+qtdA+" 3º lugar B: "+qtdB);
    }else{
        console.log("1º lugar C:"+qtdC+" 2º lugar B: "+qtdB+" 3º lugar A: "+qtdA);
    }
}

var total = qtdA+qtdB+qtdC

porcentagemA = qtdA / total * 100;

porcentagemB = qtdB / total * 100;

porcentagemC = qtdC / total * 100;

console.log(porcentagemA);

console.log(porcentagemB);

console.log(porcentagemC);

porcentagemNivelSuperior = qtdNS / pesquisa.length * 100;

console.log("Porcentagem nível superior:"+Math.round(porcentagemNivelSuperior)+"%");

console.log("Média Salário Entrevistados Nível Superior: "+(somaNSr/qtdNS));

console.log("Média Salário Entrevistados Sem Nível Superior: "+(somaSSr/qtdSS));

porcentagemCompraDDM = qtdCompraDDM / pesquisa.length * 100;

console.log(porcentagemCompraDDM);

console.log("Média de gastos no dia das mães é: "+(somaGastoDDM/qtdCompraDDM));

porcentagemPRE = qtdPRE / pesquisa.length * 100;

console.log("porcentagem de quem possuí renda emergencial: "+porcentagemPRE);

console.log("O entrevistado mais velho chama-se "+maisVelhoNome+" e tem "+maisVelho+" anos");

console.log("O entrevistado mais novo chama-se "+maisNovoNome+" e tem "+maisNovo+" anos");

console.log("A média de idades dos entrevistados com nível superior é: "+(somaIdadeNS/qtdNS));

console.log("A média de idades dos entrevistados sem nível superior é: "+(somaIdadeSS/qtdSS));
