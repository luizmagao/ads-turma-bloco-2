import User from "./Users.js"

export default class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovarEstudante(estudante, curso) {
        return `estudante ${estudante} passou no curso de ${curso}, responsavel ${this.nome}`
    }
}

// const novoAdmin = new Admin("Rodrigo", "r@r.com", "2025-10-09")
// console.log(novoAdmin)
// console.log(novoAdmin.exibirInfos())