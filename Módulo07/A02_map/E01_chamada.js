const alunos = [
                {id:1,nome:'Agatha',idade:23,curso:'java'},
                {id:2,nome:'Alberto',idade:19,curso:'javascript'},
                {id:3,nome:'Lúcio',idade:21,curso:'php'},
                {id:4,nome:'Lissandra',idade:18,curso:'node'},
                {id:1,nome:'Isaac',idade:30,curso:'react'}
            ]

//const chamada = alunos.map(aluno => aluno.nome);
//const chamada = alunos.map(({nome}) => [nome]);

//const chamada = alunos.map(aluno => [aluno.nome,aluno.idade]);
//const chamada = alunos.map(({nome,idade}) => nome+" "+idade);
const chamada = alunos.map(({nome,idade}) => [nome,idade]);

console.log(chamada);