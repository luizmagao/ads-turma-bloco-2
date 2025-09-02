const estudantes = ['luiz','lins','monteiro','junior'];

const medias = [10,9.5,8.3,7];

const lista = [estudantes, medias];

const [a, m] = lista;
console.log(a, m);

const funcao = function(aluno) {
    if( estudantes.includes(aluno) ) {
        let index = estudantes.indexOf(aluno); 
        return `A média de ${aluno}: ${medias[index]}`;
    }
    return 'O aluno não foi encontrado';
} 

console.log(funcao('junior999'));