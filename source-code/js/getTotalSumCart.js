export function getTotalCartSum(cart) {
    let cartPrices = [];
    let propsCartProducts = cart;

    // Collect totalprice from all the products and push them into cartPrices array
    for(let i in propsCartProducts) {
        cartPrices.push(propsCartProducts[i].totalPrice);
    }
    // Calculate cartPrices total sum
    let initValue =  0;
    const calcTotalCartSum = cartPrices.reduce((prevVal, currVal) => prevVal + currVal, initValue);

    return calcTotalCartSum;
}