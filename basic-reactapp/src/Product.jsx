import "./Product.css";
import Price from "./Price";
function Product({title, idx}){
    let oldPrices=["15000","1459","1599","899"]
    let newPrices=["1399","1199","1099","599"]
    
    let description=["8,000 DPI","Intutive surface","Designed for ipad pro","wireless"];
    let description2=["wireless","8,000 DPI","Intutive surface","Designed for ipad pro"];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx]}</p>
            <p>{description2[idx]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    )
}

export default Product 