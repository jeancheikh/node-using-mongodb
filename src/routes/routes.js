import { 
  addnewProduct, 
  getProducts, 
  getProductWithID 
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
}

export default routes