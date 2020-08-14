import { 
  addnewProduct, 
  getProducts, 
  getProductWithID , 
  updateProduct, 
  deleteProduct
} from '../controllers/controllers';

const routes = (app) => {
  app.route('/products')

    // get all products endpoint
    .get(getProducts)

    // post endpoint
    .post(addnewProduct);


  app.route('/products/:ProductID')
    // get one product endpoint 
    .get(getProductWithID)
    // update one product endpoint
    .put(updateProduct)
    // delete one product
    .delete(deleteProduct);
}

export default routes