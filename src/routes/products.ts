import { Router } from "express";
import { ProductsCtrl } from "../controllers/products";


const router = Router();

router.get('/', ProductsCtrl.getAll);
router.post('/', ProductsCtrl.addProduct);

export default router;