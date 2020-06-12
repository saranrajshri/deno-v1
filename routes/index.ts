import { Router } from "https://deno.land/x/oak/mod.ts";
import products from "../data/products.ts";
import {Product} from "../models/types.ts";
import {v4} from "https://deno.land/std/uuid/mod.ts"
const router = new Router();



router.get('/api',({response})=>{
    response.body = "Hello world";
})

router.get('/api/getProducts',({response}:{response:any})=>{
    response.body = {
        success: true,
        products: products
    }
})

router.post('/api/addProduct', async ({ request, response }: { request: any, response: any }) => {    
    const body = await request.body()

    if (!request.hasBody) {
        response.status = 400
        response.body = {
            success: false,
            msg: 'No data'
        }
    } else {
        const product: Product = body.value
        product.id = v4.generate()
        products.push(product)
        response.status = 201
        response.body = {
            success: true,
            data: product
        }
    }
}) 
export default router;  