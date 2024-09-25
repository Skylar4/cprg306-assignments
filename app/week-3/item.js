
export default function Item({aitem}){
    let{ name: itemname,
        quantity: itemquantity,
        category: itemcategory,
    } = aitem
    return(
        <div className="m-2 bg-blue-950 border-orange-50 border-2 w-64 p-1" style={{display: "flex",flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <h1><b>{itemname}</b></h1>
            <p>qunitity: {itemquantity}</p>
            <p>category: {itemcategory}</p>
        </div>
    )
}