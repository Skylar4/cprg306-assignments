    
export default function Item({aItem, onSelect}){
    const{id,name,quantity,category } = aItem


    return(
        <div className="m-2 bg-blue-950 border-orange-50 border-2 w-64 p-1 rounded-lg flex flex-col items-center justify-center"
         onClick = {() =>onSelect(name)}>
            <h1><b>{name}</b></h1>
            <p>quantity: {quantity}</p>
            <p>category: {category}</p>
            <input type="checkbox" />
        </div>
    )
}