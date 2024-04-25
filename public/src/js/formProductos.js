import '../../styles.scss';
import {ControlProductos} from "./ControlProductos";


//document.addEventListener("DOMContentLoaded", function() {
// Initialize a new ItemsController with currentId set to 0
    const itemsController = new ControlProductos(0);

// Select the New Item Form
    const newItemForm = document.querySelector('#newItemForm');

// Add an 'onsubmit' event listener
    newItemForm.addEventListener('submit', (event) => {
        // Prevent default action
        event.preventDefault();

        // Select the inputs //OBTENER LA REFERENCIA EN EL FORM
        const newItemId = document.querySelector('#newItemId');
        const newItemName = document.querySelector('#newItemName');
        const newItemDescription = document.querySelector('#newItemDescription');
        const newItemImageUrl = document.querySelector('#newItemImageUrl');
        const newItemPrice = document.querySelector('#newItemPrice');
        const newItemPieces = document.querySelector('#newItemPieces');
        const newItemBrand = document.querySelector('#newItemBrand');
        const newItemModel = document.querySelector('#newItemModel');
        const newItemSKU = document.querySelector('#newItemSKU');
        const newItemGender = document.querySelector('#newItemGender');


        // Get the values of the inputs // OBETENER EL VALOR DEL FORM Y GUARDALOS EN UN OBJETO PARA VALIDAR

        const objProducto = {
            idProducto : newItemId.value,
            name : newItemName.value,
            description : newItemDescription.value,
            imageUrl : newItemImageUrl.value,
            price : newItemPrice.value,
            pieces : newItemPieces.value,
            brand : newItemBrand.value,
            model : newItemModel.value,
            sku : newItemSKU.value,
            gender : newItemGender.value
        }
        console.log(objProducto);

        /*
            Validation code here
        */
        if(isProductValid(objProducto)) {
            itemsController.agregarProducto(objProducto); // si los campos son adecuados, enviar al local storage
            // Clear the form
            newItemId.value = '';
            newItemName.value = '';
            newItemDescription.value = '';
            newItemImageUrl.value = '';
            newItemPrice.value = '';
            newItemPieces.value = '';
            newItemBrand.value = '';
            newItemModel.value = '';
            newItemSKU.value = '';
            newItemGender.value = '';

            //showUserError(["Producto agregado con exito"]);
            /*
                        const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

                        //const alert = (message, type) => {
                            const wrapper = document.createElement('div')
                            wrapper.innerHTML = `
                                <div class="alert alert-success alert-dismissible" role="alert">
                                   <div>Producto añadido con éxito</div>
                                   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                   <div id="liveAlertPlaceholder"></div>
            <button type="button" class="btn btn-primary" id="liveAlertBtn">Show live alert</button>
                                </div>`;

                            alertPlaceholder.append(wrapper)
*/
                        const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
                        //const appendAlert = (message, type) => {
                            const wrapper = document.createElement('div')
                            wrapper.innerHTML = [
                                `<div class="alert alert-success alert-dismissible fade show" role="alert">`,
                                `   <div>Producto agregado correctamente</div>`,
                                '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                                '</div>'
                            ].join('')

                            alertPlaceholder.append(wrapper)
                        }
            /*
                        const alertTrigger = document.getElementById('liveAlertBtn')
                        if (alertTrigger) {
                            alertTrigger.addEventListener('click', () => {
                                appendAlert('Producto agregado correctamente', 'success')
                            })
                        }
            */



    });

const isProductValid = ( newProduct ) =>{
    let isValid = true;
    const message = [];
    if( (newProduct.price <= 0)  ){
        isValid = false;
        message.push("El precio no puede ser menor de 0");
    }
    if( (newProduct.pieces <= 0)  ){
        isValid = false;
        message.push("Debe haber al menos una pieza");
    }
    // TODO verificar los campos

    if( ! isValid ) showUserError( message );
    else {
        //const success = document.getElementById("alertSuccess");
        //success.innerHTML = `Producto agregado con exito`;
        return isValid;
    }
}


const showUserError= (errorMessage)=> {
    let alert = "";
    for (let message of errorMessage) {
        alert += `<li>${message}</li>`
    }
    const addMessages = document.getElementsByClassName('modal-body');
    addMessages[0].innerHTML= alert;

    const myModal = new bootstrap.Modal(document.getElementById('exampleModal'),
        {keyboard: false})

    myModal.show()

    var btn = document.getElementById("closeModal");
    btn.addEventListener("click", myFunction);
    function myFunction() {
        myModal.hide();
    }

}
