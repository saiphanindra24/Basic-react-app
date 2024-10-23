function handleClick(){
    console.log("sai phanindra")
}

function handleMouseOver(){
    console.log("gampala")
}
 function handleDblClick(){
    console.log("Banglore")
 }


export default function Button(){
    return(
        <div>
            <button onClick={handleClick}>Click me</button>
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, blanditiis pariatur nam veritatis eveniet repudiandae numquam. Molestias explicabo quod repudiandae!</p>
            <button onDoubleClick={handleDblClick}>double click</button>
        </div>
    )
}