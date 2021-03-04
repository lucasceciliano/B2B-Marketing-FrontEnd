

//autentiucando form 

function validarFormContato() {
let nome = formcontact.nome.value
let email = formcontact.email.value
let telefone = formcontact.usertel.value


     if(nome == "") {
     alert("Por favor, digite seu nome")
     formcontact.nome.focus()
     return (false)
    }if(email == "") {
        alert("Por favor, digite seu email")
        formcontact.nome.focus()
        return (false)
       }if(telefone == "") {
        alert("Por favor, digite seu telefone")
        formcontact.nome.focus()
        return (false)
       }
}
