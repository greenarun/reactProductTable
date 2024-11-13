import React, {useState,useEffect} from "react";
import axios from 'axios'
import ProductImage from "./ProductImage";
import './Product.style.css'

const Product = () => {
const [productlist,setProductlist] = useState([]) 

    useEffect(() => { 
        axios.get('https://dummyjson.com/products').then((res) => {
            setProductlist(res.data)
        }).catch((err)=>console.log(err))

    },[])

    const oddoreven =(id) => {
        if(id%2===0) {
            return 'even'
        } else {
            return 'odd'
        }
    }
    
    return( <>
    {
        productlist.length!==0 && 
        <table id="products">
            <thead className="product-head">
                <tr>
                <th>ID</th>
                <th>Product</th> 
                <th>Image</th>
                </tr>
            </thead>
            <tbody>

            {
                productlist.products.map(list => 
                <tr key={list.id} className={`product-list ${oddoreven(list.id)}`}>
                <td>{list.id}</td>
                <td><strong>{list.title}</strong><br/>
                <span className="description" title={list.description}>{`${list.description.substring(0,100)}...`}</span></td>  
               <td><ProductImage images={list.images}/></td>  
                </tr>)
           
            } 
           </tbody> 
        
        </table>
    }
   
    </>)

}

export default Product