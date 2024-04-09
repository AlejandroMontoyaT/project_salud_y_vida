//Obtenemos la referencia del formulario.

const register = document.forms["newItemForm"];

/**
 *  AddEventListener permite agregar funciones que se ejecutarán
 *  en respuesta a un evento específico que ocurre aun elemento del DOM.
 *
 *  register.addEventListener( type  , fncCallback );
 *
 *  addEvenListener podemos manejar interacciones del usuario como clics,
 * cambios de teclado, movimientos del mouse, entre otros.
 */
register.addEventListener( "submit"  , (e) =>{
    e.preventDefault();
    console.log("Estoy dentro del elemento submit");

    //leer los inputs del formulario
    const newProduct = {
        idProducto: register.elements["newItemId"].value,
        name: register.elements["newItemName"].value,
        description: register.elements["newItemDescription"].value,
        imageUrl: register.elements["newItemImageUrl"].value,
        price:register.elements["newItemPrice"].value,
        pieces: register.elements["newItemPieces"].value,
        brand: register.elements["newItemBrand"].value,
        model: register.elements["newItemModel"].value,
        sku:register.elements["newItemSKU"].value,
        gender:register.elements["newItemGender"].value,
    };

    console.table(newProduct);

    if(isProductValid(newProduct)){
        localStorage.setItem("productData", JSON.stringify( newProduct ) ); // guardar nuevo dato en local storage
        localStorage.setItem("fechaAlmacenamiento", new Date().toLocaleTimeString() );
    }

} );

//** Verificar datos del nuevo usuario */
const isProductValid = ( newProduct ) =>{
    let isValid = true;
    const message = [];
    if( (newProduct.name)  ){
        isValid = false;
        message.push("El password debe ser mayor a ocho caracteres");
    }
    if(! /[a-zA-Z0-9]/.test(newProduct.password) ){
        isValid = false;
        isValid = false;
        message.push("El password debe tener solo letras y números del 0 al 9");
    }
    // TODO verificar los campos

    if( ! isValid ) showUserError( message );
    else showUserError( [] );

    return isValid;
}


const showUserError= (errorMessage)=>{
    let alert = "";
    for (let message of errorMessage ){
        alert += `<li>${message}</li>`
    }

    document.getElementById("error-message").innerHTML= alert;
}