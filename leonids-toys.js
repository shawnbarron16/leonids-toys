const toyToFind = 0;

const toys = [
    {
        id: 1,
        name: "Wooden Horse",
        stock: 12,
        size: 10,
        needToRestock: false,
        isleNumber: 4,
        price: 5.00,
        color: "Brown"
    },
    {
        id: 2,
        name: "Jack in the Box",
        stock: 4,
        size: 6,
        needToRestock: false,
        price: 15.00,
        color: "Green"
    },
    {
        id:3,
        name: "Slinky",
        stock: 0,
        size: 20,
        needToRestock: true,
        price: 2.50,
        color: "silver"
    }

];

const toyPlane = {
    name: "Toy Plane",
    stock: 12,
    size: 8,
    needToRestock: false,
    price: 10.00,
    color: "white"
};

const whoopieCushon = {
    name: "Whoopie Cushon",
    stock: 0,
    size: 5,
    needToRestock: true,
    price: 0.75,
    color: "pink"
};

const addToyToCatalouge = (newToy) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const lastId = currentLastToy.id
    idForNewToy = currentLastToy.id + 1

    newToy.id = idForNewToy
    toys.push(newToy)
};

addToyToCatalouge(toyPlane);
addToyToCatalouge(whoopieCushon);

for (const toy of toys) {
    if (toy.id === toyToFind) {
    toy.price = toy.price * 0.05 + toy.price;
    console.log(`The ${toy.name} costs $${toy.price}. We currently have ${toy.stock} in stock.`)
    } else 
    toy.price = toy.price * 0.05 + toy.price;
    console.log(`The ${toy.name} costs $${toy.price}. We currently have ${toy.stock} in stock.`)
};