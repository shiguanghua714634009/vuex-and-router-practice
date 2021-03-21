export default {
    getObj() {
       return new Promise((resolve)=>{
            let obj = {
                name: "张三",
                age: 20,
            }
            setTimeout(()=>{
                resolve(obj);
            },3000)
        })
    }
}