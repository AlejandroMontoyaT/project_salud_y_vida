// Obtenemos la referencia del formulario
const register = document.forms["newItemForm"];

register.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Estoy dentro del elemento submit");

    // Leer los inputs del formulario
    const newProduct = {
        idProducto: register.elements["newItemId"].value,
        name: register.elements["newItemName"].value,
        description: register.elements["newItemDescription"].value,
        imageUrl: register.elements["newItemImageUrl"].value,
        price: parseFloat(register.elements["newItemPrice"].value),
        pieces: parseInt(register.elements["newItemPieces"].value),
        brand: register.elements["newItemBrand"].value,
        model: register.elements["newItemModel"].value,
        sku: register.elements["newItemSKU"].value,
        gender: register.elements["newItemGender"].value,
    };

    console.table(newProduct);

    if (isProductValid(newProduct)) {
        localStorage.setItem("productData", JSON.stringify(newProduct));
        localStorage.setItem("fechaAlmacenamiento", new Date().toLocaleString());
        showUserSuccess("Producto agregado con éxito");
        clearForm();
    }
});

// Verificar datos del nuevo producto
const isProductValid = (newProduct) => {
    const errors = [];

    if (!newProduct.name) {
        errors.push("El nombre del producto es obligatorio");
    }

    if (newProduct.price <= 0) {
        errors.push("El precio debe ser mayor a 0");
    }

    if (newProduct.pieces <= 0) {
        errors.push("Debe haber al menos una pieza");
    }

    // Verificar los demás campos según tus requisitos

    if (errors.length > 0) {
        showUserError(errors);
        return false;
    }

    return true;
};

const showUserError = (errorMessages) => {
    const errorList = errorMessages.map((message) => `<li>${message}</li>`).join("");
    document.getElementById("error-message").innerHTML = `<ul>${errorList}</ul>`;
};

const showUserSuccess = (message) => {
    document.getElementById("success-message").innerHTML = message;
};

const clearForm = () => {
    register.reset();
};