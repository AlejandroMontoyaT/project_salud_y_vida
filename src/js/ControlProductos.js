
// Create a ItemsController class
class ControlProductos {
    // Set up the items and currentId property in the contructor
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }

    // Create the addItem method
    agregarProducto(nuevoProducto) {
        const item = {
            // Increment the currentId property
            id: this.currentId++,
            idProducto: nuevoProducto.idProducto,
            name: nuevoProducto.name,
            description: nuevoProducto.description,
            imageUrl: nuevoProducto.imageUrl,
            price: nuevoProducto.price,
            pieces: nuevoProducto.pieces,
            brand: nuevoProducto.brand,
            model: nuevoProducto.model,
            sku: nuevoProducto.sku,
            gender: nuevoProducto.gender
        };

        // Push the item to the items property
        this.items.push(item);

        //Save items to local storage
        localStorage.setItem("items", JSON.stringify(this.items));
    }
}

export {ControlProductos};