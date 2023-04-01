export const Card=({item,id,handleClick},result)=>{

    const itemClass=item.state?"active"+item.state:"";
    
    return(
        <div className={"card"+itemClass} onClick={()=>handleClick(id)}>
            <img src={"./logo/"+item.value}></img>
        </div>
        
    )
}