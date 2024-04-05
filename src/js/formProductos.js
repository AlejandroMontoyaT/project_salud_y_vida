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
        //const newItemBrand = document.querySelector('#newItemBrand');
        const newItemModel = document.querySelector('#newItemModel');
        const newItemSKU = document.querySelector('#newItemSKU');
        //const newItemGender = document.querySelector('#newItemGender');


        // Get the values of the inputs // OBETENER EL VALOR DEL FORM
        const idProducto = newItemId.value;
        const name = newItemName.value;
        const description = newItemDescription.value;
        const imageUrl = newItemImageUrl.value;
        const price = newItemPrice.value;
        const pieces = newItemPieces.value;
        //const brand = newItemBrand.value;
        const model = newItemModel.value;
        const sku = newItemSKU.value;
        //const gender = newItemGender.value;


        /*
            Validation code here
        */

        // Add the item to the controlProducto
        itemsController.agregarProducto(idProducto, name, description, imageUrl, price, pieces, model, sku);

        // Clear the form
        newItemName.value = '';
        newItemDescription.value = '';
    });
