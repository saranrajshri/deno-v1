import {v4} from "https://deno.land/std/uuid/mod.ts"
    
import {Product} from "../models/types.ts";

let products: Product[] = [
    {
        id: "1",
        name: "Product One",
        description: "This is product one",
        price: 99.9
    },
    {
        id: "2",
        name: "Product Two",
        description: "This is product two",
        price: 99.9
    },
    {
        id: "3",
        name: "Product Three",
        description: "This is product three",
        price: 99.9
    },
    {
        id: "4",
        name: "Product Four",
        description: "This is product four",
        price: 99.9
    },
]
export default products