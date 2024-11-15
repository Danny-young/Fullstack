import { Router } from "express";

import {
listproducts,
createProduct,
 getProductById,
 updateProduct,
 deleteProduct,

} from "./productsConrollers"

const router = Router();

// router.get('/',(req,res) => {
//     res.send('The list of product 123!');
// }
// )

// router.get('/:id',(req,res) => {
//     console.log(req.params.id);
//     res.send(`Product with id ${req.params.id}!`);
// })

// router.post('/',(req,res) => {
//     res.send(`New Product`)
// })

router.get('/', listproducts);
router.get('/:id', getProductById);
router.post('/',createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
export default router;