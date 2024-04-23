const alunos = [
    {
        nome: 'João',
        nota: 9
    },
    {
        nome: 'Cléo',
        nota: 8.5
    },
    {
        nome: 'Ariel',
        nota: 10
    },
    {
        nome: 'Sofia',
        nota: 9.2
    },
    {
        nome: 'Bento',
        nota: 6
    },
    {
        nome: 'Gabriel',
        nota: 7
    },
    {
        nome: 'Ana',
        nota: 5.4
    },
    {
        nome: 'Maria',
        nota: 3
    },
    {
        nome: 'Pedro',
        nota: 5.8
    },
    {
        nome: 'Caio',
        nota: 5.9
    }
];

const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6);
console.log(alunosAprovados);