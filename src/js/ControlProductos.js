
// Create a ItemsController class
class ControlProductos {
    // Set up the items and currentId property in the contructor
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }

    // Create the addItem method
    agregarProducto(idProducto,  name, description, imageUrl, price, pieces, model, sku) {
        const item = {
            // Increment the currentId property
            id: this.currentId++,
            idProducto: idProducto,
            name: name,
            description: description,
            imageUrl: imageUrl,
            price: price,
            pieces: pieces,
            //brand: brand,
            model: model,
            sku: sku
            //gender: gender
        };

        // Push the item to the items property
        this.items.push(item);

        //Save items to local storage
        localStorage.setItem("items", JSON.stringify(this.items));
    }
}

export {ControlProductos};