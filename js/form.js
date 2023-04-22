const $inputName = document.querySelector('#nombre');
const $inputEmail = document.querySelector('#email');
const $inputMensaje = document.querySelector('#mensaje');


const $form = document.querySelector(".form");
const $btnSub = document.querySelector('.btn-sub')
const $buttonMailto = document.querySelector("#emailC");

const email = {
    email: '',
    nombre: '',
    mensaje: '',
}

$form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  $buttonMailto.setAttribute(
    "href",
    `mailto:contact@sykez.dev?subject=Nombre: ${form.get(
      "nombre"
    )}  Email: ${form.get("email")}&body=${form.get("mensaje")}`
  );
  $buttonMailto.click();
}
eventListeners();
function eventListeners(){
    $inputName.addEventListener('blur', validarDatos);
    $inputEmail.addEventListener('blur', validarDatos);
    $inputMensaje.addEventListener('blur', validarDatos);
}

function validarDatos(e){
    const valor = e.target.value.trim();
    if( valor === ''){
        mostrarAlerta(`El campo ${e.target.name} es obligatorio`);
        email[e.target.name] = '';
        comprobarEmail();
        return;
    }
    limpiarAlerta();

    email[e.target.name] = e.target.value.trim().toLowerCase();
    
    comprobarEmail();

}

function mostrarAlerta(mensaje){

    limpiarAlerta();

    const error = document.createElement('P');
    error.classList.add('error', 'm-0')
    error.textContent = mensaje;
    $form.appendChild(error)

    setTimeout(() => {
        error.remove();
    }, 3000);
}

function limpiarAlerta(){
    const alerta = document.querySelector('.error');
    if(alerta){
        alerta.remove();
    }
}

function comprobarEmail(){
    console.log();
    if(Object.values(email).includes('')){
        $btnSub.classList.add('opacity-50')
        $btnSub.disabled = true;
        return;
    }  
    $btnSub.classList.remove('opacity-50')
    $btnSub.disabled = false;
}