import axios from "axios";
import api from "../config/global"

export default class API {
    // no params
    async getProduct() {
        let a = await axios.get(api.API+`/product`)
        return a.data;
    }
    async getTopProduct() {
        let a = await axios.get(api.API+`/product/desc`) 
        return a.data;
    }
    async createProduct(id,name,price,description,slug,category,col,sty,detail,disc,disc_percent,thumb ) {
        let a = await axios.post(api.API+`/product/create`,{
            id_product : id,
            product_name: name,
            product_price: price,
            description: description,
            slug: slug,
            categories: category,
            color: col,
            style: sty,
            detail_info: detail,
            discount: disc,
            discount_percent: disc_percent,
            thumbnail: thumb

        })
        return a;
    }
    async getCommentbyId(id) {
        let a = await axios.get(api.API+`/comment/` + id)
        return a.data;
    }
    async createNewComment(id, name, productid, context, starnum, timenow){
        let a = await axios.post(api.API+`/create`,{
            id_user: id,
            user_name: name,
            id_product: productid,
            comment: context,
            star: starnum,
            time: timenow,
        })
        return a;
    }
    async getOrderbyIDuser(id) {
        let a = await axios.get(api.API+`/order/`+ id)
        return a.data;
    }
    async getCartbyIDuser(id) {
        let a = await axios.get(api.API+`/cart/`+ id)
        return a.data;
    }
    async getCartinfobyId(id) {
        let a = await axios.get(api.API+`/cartinfo/`+ id)
        return a.data;
    }
    async getProductbySlug(id) {
        let a = await axios.get(api.API+`/product/`+ id)
        return a.data;
    }
    async getProductbyCategory(category) {
        let a = await axios.get(api.API+`/category/`+ category)
        return a.data;
    }
    async getUserbyIDuser(id){
        let a = await axios.get(api.API+`/user/` + id)
        return a.data;
    }
    async updatefavorProduct(iduser, idproduct){
        let a = await axios.post(api.API+`/user/favorite`,{
            id_user: iduser,
            id_product: idproduct
        })
        return a;
    }
    async createNewOrder(iduser,idproduct,productname,price,img,col,sty,quantity,siz) {
        let a = await axios.post(api.API+`/order/create`,{
            id_user: iduser,
            id_product: idproduct,
            product_name: productname,
            product_price: price,
            thumbnail:img,
            color: col,
            style: sty,
            quantity: quantity,
            size: siz
        })
        return a;
    }
    async deleteOneInOrder(iduser,idproduct){
        let a = await axios.post(api.API+`/order/deleteOne`,{
            id_user:iduser,
            id_product: idproduct
        })
        return a;
    }
    async createNewCart(iduser, tot, add, phon)
    {
        let a = await axios.post(api.API+`/cart/create`,{
            id_user: iduser,
            total: tot,
            address: add,
            phone: phon
        })
        return a;
    }
    async getProductbyPriceGreater(price) {
        let a = await axios.get(api.API+`/product/price/greater/`+ price)
        return a.data;
    }
    async getProductbyPriceSmaller(price) {
        let a = await axios.get(api.API+`/product/price/smaller/`+ price)
        return a.data;
    }
    async getProductbyPriceBetween(greaterthan, smallerthan) {
        let a = await axios.get(api.API+`/product/price/between/`+ greaterthan +`/`+ smallerthan)
        return a.data;
    }
    async getTotalbyIDuser(id) {
        let a = await axios.get(api.API+`/order/total/`+ id)
        return a.data;
    }
    //for login
    async UserLogin(name,pass)
    {
        let a = await axios.post(api.API+`/user/login`,{
            username : name,
            password : pass
        })
        return a;
    }
    async UserRegister(name,pass)
    {
        let a = await axios.post(api.API+`/user/resigter`,{
            username : name,
            password : pass
        })
        return a;
    }
    async UpdateUser(id,email,phone,address)
    {
        let a = await axios.post(api.API+`/user/update`,{
            id: id,
            email: email,
            phone: phone,
            address: address
        })
        return a;
    }
}