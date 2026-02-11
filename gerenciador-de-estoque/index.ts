interface Product{
   name: string,
   price:number,
   quantity: number
}

function checkStock(product: Product){
   if (product.quantity <= 0){
      return `${product.name} is out stock.`;
   }
   const newQuantity = product.quantity - 1;
   return `Sale made. Now ${product.name} has ${newQuantity} in stock`;
}

const newProduct: Product = {
   name: "Milk 1L",
   price: 10,
   quantity: 0
}

console.log(checkStock(newProduct));