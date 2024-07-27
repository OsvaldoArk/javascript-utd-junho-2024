
    var numberToFind = 0;
    var attempts = 0;

    function refresh(){
        // Gerar um número aleatório
        var element = document.getElementById('Adivinhe');
        element.value = '';
        
        numberToFind = parseInt(Math.random() * 100);
        attempts = 0;

        console.log('The number to find: '+numberToFind);
    }

    refresh();

    function verifyNumber()
    {
        var element = document.getElementById('Adivinhe');
        var Adivinhe = element.value;

        if(Adivinhe > 100 || Adivinhe < 0)
        {
            alert('Número é inválido');
            return;
        }

        if(Adivinhe > numberToFind)
        {
            attempts++;
            alert('🚨 O número para ser encontrado é MENOR');
        }
        else if(Adivinhe < numberToFind)
        {
            attempts++;
            alert('🚨 O número para ser encontrado é MAIOR')
        }
        else
        {
            alert('✅ Parabéns você acertou!! Com '+attempts+' erros!');
            refresh();
        }
    }
