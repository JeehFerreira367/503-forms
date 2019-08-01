let nome = document.querySelector(".nome");
let email = document.querySelector(".email");
let confirm = document.querySelector(".confirm");
let botao = document.querySelector("button");
let texto = document.querySelector("p");
let form = document.querySelector("initial");

localStorage.setItem('email','w@gmail.com');

if(localStorage.email == confirm){
    form.style.display="none";
    section.style.display="initial";
    texto.innerHTML=`Seja bem vindo ${localStorage.email}`;
    naoSou.innerHTML=`Não sou ${localStorage.email};`
}
else{
    function acessar(){
        form.style.display="initial";
        
        if(email.value == confirm.value){
            localStorage.setItem("email", email.value);
            localStorage.setItem("nome", nome.value);
            localStorage.setItem("confirm", confirm.value);
            div.style.display="none";
            section.style.display="initial";
            texto.innerHTML=`Seja bem vindo ${localStorage.email}`;

        } else {
            alert("DIGITE O EMAIL DIREITO CORNO")
        }
    }
}

function limpar(){
    localStorage.removeItem('email');
}

botao.onclick = acessar;
naoSou.onclick = limpar;