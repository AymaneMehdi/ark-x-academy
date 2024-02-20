const express = require("express");
const app = express(); 
app.use(express.json());
let products = [
    { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
    { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
    { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
    { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
    { id: 5, name: 'DJI Mavic Air 2', price: 799.99 },
]; 
app.get('/products',(req,res)=>{          
    res.send(products);
})
app.get('/products/search',(req,res)=>{  
    let keyword = req.query.name;
    let minPrice = req.query.minPrice;
    let maxPrice = req.query.maxPrice;
    let filteredProducts = products
    if (keyword){
        filteredProducts = filteredProducts.filter(p => p.name.includes(keyword))
    }
    if (minPrice){
        filteredProducts = filteredProducts.filter(p => p.price >= minPrice)
    }
    if(maxPrice){
        filteredProducts = filteredProducts.filter(p => p.price <= maxPrice)
    }
    res.send(filteredProducts);
})
app.get('/products/:id',(req,res)=>{  
    const id = req.params.id
    let product = products.find(p => p.id == id);
    //console.log(product);
    if(product){
        res.send(product)
    } else{
        res.send('product not found')
    }
        res.send(products);
})
app.post('/products', (req, res) => {
    let product = req.body;
    product.id = products.length +1;
    products.push(product)
    res.send(products)
});
app.put('/products/:id', (req, res) => {
  const id = req.params.id;
  let product = products.find(p => p.id == id);
  //console.log(product);
    if(product){
      product.name = req.body.name;
      product.price = req.body.price;
      res.json({ message: 'Product updated successfully' });
    } else{
        res.send('product not found')
    }
});
app.delete('/products/:id', (req, res) => {
  const id = req.params.id;
  const index = products.findIndex(p => p.id == id);
  //console.log(product);
  if(index){
  products.splice(index, 1);
  res.json({ message: 'Product deleted successfully' });
} else{
  res.send('product not found')
}
});
app.listen(3000,() => {
console.log(" server is running in localhost 3000");
});
