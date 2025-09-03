import User from "./Users.js"

class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }
}

const novoAdmin = new Admin("Rodrigo", "r@r.com", "2025-10-09")
console.log(novoAdmin)
console.log(novoAdmin.exibirInfos())