function onSubmit(event){
    console.log("form was submited")
    event.preventDefault()
}




export default function Form(){
    return(
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="enter name" />
            <button >submit</button>
        </form>
    )
}