const products=[
    {id:1,name:"Product1",price:25},
    {id:2,name:"Product2",price:50},
    {id:3,name:"Product3",price:45}
];


let cart = []
products.forEach((product)=>{
    console.log(product)
})


const displayProducts=products.filter((product)=> product.price>40);
console.log(displayProducts);


let addtocart = products.find((product)=>product.id==2)
addtocart = {...addtocart,quantity:1}
console.log(addtocart);

