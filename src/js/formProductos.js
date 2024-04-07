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

        /*
        const idProducto = newItemId.value;
        const name = newItemName.value;
        const description = newItemDescription.value;
        const imageUrl = newItemImageUrl.value;
        const price = newItemPrice.value;
        const pieces = newItemPieces.value;
        const brand = newItemBrand.value;
        const model = newItemModel.value;
        const sku = newItemSKU.value;
        const gender = newItemGender.value;
    */

        /*
            Validation code here
        */
        if(isProductValid(objProducto)){
            itemsController.agregarProducto(objProducto); // si los campos son adecuados, enviar al local storage
        }

        //itemsController.agregarProducto(objProducto); // si los campos son adecuados, enviar al local storage

        // Add the item to the controlProducto
        //itemsController.agregarProducto(idProducto, name, description, imageUrl, price, pieces, model, sku);

        // Clear the form
        //newItemName.value = '';
        //newItemDescription.value = '';
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
    else showUserError( [] );

    return isValid;
}


const showUserError= (errorMessage)=> {
    let alert = "";
    for (let message of errorMessage) {
        alert += `<li>${message}</li>`
    }

    const exampleModal = document.getElementById('exampleModal')
    if (exampleModal) {
        exampleModal.addEventListener('show.bs.modal', event => {
            // Button that triggered the modal
            const button = event.relatedTarget
            // Extract info from data-bs-* attributes
            const recipient = button.getAttribute('data-bs-whatever')
            // If necessary, you could initiate an Ajax request here
            // and then do the updating in a callback.

            // Update the modal's content.
            const modalTitle = exampleModal.querySelector('.modal-title')
            const modalBodyInput = exampleModal.querySelector('.modal-body input')

            modalTitle.textContent = `New message to ${recipient}`
            modalBodyInput.value = recipient
        })
    }

}