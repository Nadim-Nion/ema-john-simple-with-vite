import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();


    // If cart data is in the Database (Local Storage), we have to use async await
    const storedCart = getShoppingCart();
    const savedCart = [];
    // console.log(storedCart);

    for (const id in storedCart) {
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }


    return savedCart;
}

export default cartProductsLoader;