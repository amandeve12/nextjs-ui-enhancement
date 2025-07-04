type User = {
id:Number,
name:string
}
type Todo = {
    id:Number,
    todo:String,
    completed:Boolean,
    userId:number
  }

  function Generate(){

    // console.log(todos);



function fn1(a:string, n:Number, obj:User){

    return a + n + obj.name
}
    return (
        <> 
        
        {/* {demo} */}
        {fn1("Hello",12, {id:1,name:"Aman kumar"})}
        </>
    )
}


export default Generate