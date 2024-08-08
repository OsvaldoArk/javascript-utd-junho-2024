const alunos = [
    {id:1,nome:'Agatha',idade:23,curso:'java'},
    {id:2,nome:'Alberto',idade:19,curso:'javascript'},
    {id:3,nome:'Lúcio',idade:21,curso:'php'},
    {id:4,nome:'Lissandra',idade:18,curso:'node'},
    {id:5,nome:'Isaac',idade:30,curso:'react'},
    {id:6,nome:'Laura',idade:23,curso:'JavaScript'},
    {id:7,nome:'Amanda',idade:30,curso:'javascript'},
    {id:8,nome:'Carlos',idade:25,curso:'php'}
]

//const alunosJavascript = alunos.filter(aluno => aluno.curso.toLowerCase() === 'javascript');
const alunosJavascript = alunos.filter(({curso}) => curso.toLowerCase() === 'javascript');

const menorAprendiz = alunos.filter(({idade}) => idade >= 14 && idade <=24);

console.log(menorAprendiz.sort((a,b)=> a.nome.localeCompare(b.nome)));