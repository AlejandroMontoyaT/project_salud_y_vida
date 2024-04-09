
const sampleCatalog = [{
        'id_producto':'OG 469',
        'nombre_producto':'OGGI ',
        'img':'https://i.ibb.co/v4n9TSs/imagen-2024-04-02-160544835.png',
        'descripcion_p':'Orange and Apple juice fresh and delicious',
        'precio_p': '500',
        'en_stock':'5',
        'marca':'RayBan',
        'descuento':'0',
        'modelo_p':'Aviador',
        'sku':'HF525145',
        'genero':'H'
    },
    {
        'id_producto':'2',
        'nombre_producto':'Armazon ',
        'img':'https://i.ibb.co/v4n9TSs/imagen-2024-04-02-160544835.png',
        'descripcion_p':'Diseño de marco completo ovalado que da un estilo atractivo, para que expreses tu personalidad.',
        'precio_p': '450',
        'en_stock':'5',
        'marca':'Polaroid',
        'descuento':'0',
        'modelo_p':'PLD D432',
        'sku':'586810',
        'genero':'M'
    },
    {
        'id_producto':'3',
        'nombre_producto':'Lentes de Contacto Freshlook ',
        'img':'https://i.ibb.co/v4n9TSs/imagen-2024-04-02-160544835.png',
        'descripcion_p':'Exprésate con lentes de contacto de color FreshLook.® Los ojos es lo primero que se observa en una persona',
        'precio_p': '400',
        'en_stock':'10',
        'marca':'Freshlook',
        'descuento':'0',
        'modelo_p':'Colorblends',
        'sku':'LC1506009',
        'genero':'U'
    },
    {
        'id_producto':'4',
        'nombre_producto': 'Lente',
        'img':'https://i.ibb.co/v4n9TSs/imagen-2024-04-02-160544835.png',
        'descripcion_p':' Lente Oftálmico para Mujer Tous VTOA97 09D6 Negro/Oro ',
        'precio_p': '800',
        'en_stock':'2',
        'marca': 'Tous',
        'descuento':'0',
        'modelo_p':  'AWS42149',
        'sku':' DTR564C44 ',
        'genero':'M'
    },
    {
        'id_producto':'5',
        'nombre_producto':'Armazon ',
        'img':'https://i.ibb.co/v4n9TSs/imagen-2024-04-02-160544835.png',
        'descripcion_p':'Armazón ligero elaborado de titanio con un estilo sencillo pero vanguardista que resaltará la belleza de tus ojos.',
        'precio_p': '400',
        'en_stock':'3',
        'marca':'Xicu',
        'descuento':'0',
        'modelo_p':'XICU C895',
        'sku':'567423',
        'genero':'M'
    },
    {
        'id_producto':'6',
        'nombre_producto':'Lentes de 3 piezas',
        'img':'https://i.ibb.co/v4n9TSs/imagen-2024-04-02-160544835.png',
        'descripcion_p':'Los lentes de 3 piezas: una combinación de estilo y funcionalidad',
        'precio_p': '500',
        'en_stock':'19',
        'marca':'Oakley',
        'descuento':'0',
        'modelo_p':'3 piezas',
        'sku':'RF624135',
        'genero':'M'
    },
{
    'id_producto':'7',
        'nombre_producto': 'Lente',
        'img':'https://i.ibb.co/v4n9TSs/imagen-2024-04-02-160544835.png',
        'descripcion_p':' Lente Oftálmico para Mujer Evry EVR21902 Morado',
        'precio_p': '999',
        'en_stock':'4',
        'marca': 'Evry',
        'descuento':'0',
        'modelo_p':  'EVR21902',
        'sku':' PST564C44 ',
        'genero':'M'
},

{
    'id_producto':'8',
    'nombre_producto':'Lente',
    'img':'https://i.ibb.co/v4n9TSs/imagen-2024-04-02-160544835.png',
    'descripcion_p':' Lente oftálmico para Hombre Molto DG-84578S Negro',
    'precio_p': '999',
    'en_stock':'3',
    'marca':' MOLTO',
    'descuento':'0',
    'modelo_p':' DG-84578S',
    'sku':' AW685C2 ',
    'genero':'M'
},
{
        "id_producto": "9",
        "nombre_producto": "Lentes de Sol Deportivos Oakley Fast Jacket 2.0",
        "img": 'https://i.ibb.co/v4n9TSs/imagen-2024-04-02-160544835.png',
        "descripcion_p": "Gafas de sol deportivas con diseño aerodinámico y lentes Prizm que mejoran la percepción del color y la definición. Perfectas para practicar deportes al aire libre.",
        "precio_p": "2,200",
        "en_stock": "15",
        "marca": "Oakley",
        "descuento": "5",
        "modelo_p": "Fast Jacket 2.0",
        "sku": "OAK-FASTJACKET2.0",
        "genero": "Hombre",

},
{
        'id_producto':'10',
        'nombre_producto':'Lente ',
        'img':'https://i.ibb.co/v4n9TSs/imagen-2024-04-02-160544835.png',
        'descripcion_p':'Lente Oftálmico para Hombre Xikú Trendy HA10593 (SW)',
        'precio_p': '1700',
        'en_stock':'3',
        'marca':'Xicu',
        'descuento':'0',
        'modelo_p':'HA10593',
        'sku':'567423',
        'genero':'H'

}];
        localStorage.setItem("items", JSON.stringify(sampleCatalog));

    
const agregarCatalogo = () => {
    const storageItems = localStorage.getItem("items")
    if (storageItems) {
        const card = document.getElementById("list-items");
        const items = JSON.parse(storageItems)
          
            items.forEach(item => {
                  card.innerHTML += `<div class="col">
                  <div class="card h-100 ">
                    <img src="${item.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${item.nombre_producto}</h5>
                      <p class="card-text">${item.descripcion_p}</p>
                    </div>
                    <div class="row justify-content-center p-2">
                    <div class="col-8 justify-content-center align-content-center"><button class="btn btn-primary">Comprar Ahora    </button></div>
                    <div class="col-4"><a href="#"><img class=" img-fluid w-50" src="../../assets/img/carrito temporal.jpg" alt=""></a></div>
                  </div>
                  </div>
                </div>
            `;
            });
    }
}
agregarCatalogo();