export function calcQuantity(type, prod, arr) {
    let products = [...arr];

    for(let i=0; i<products.length; i++ ) {
        if(products[i].id === prod.id) {
            let ind = products.indexOf(products[i]);
            
            // Check quantity action type
            if(type === 'increase') {
                products[ind].quantity += 1;
                products[ind].totalPrice = products[ind].quantity * products[ind].price; 
            } else {
                // Avoid getting negative numbers
                if(products[ind].quantity >= 2) {
                    products[ind].quantity -= 1;
                    products[ind].totalPrice = products[ind].quantity * products[ind].price;
                }
            }
            // Update shopproducts state after quantity change
            // this.setState({ stateShopProd: products })
            
        }
    }
    return products;
}