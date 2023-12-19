import { useSelect, useState } from "react";

import MenuList from "./MenuList";

const MenuCategory = (props) => {
    const handleList = () =>{
        props.setexpandColapse();
    }
    return (
        <div className="w-6/12 bg-gray-100 mx-auto my-4 shadow-lg p-4 rounded-lg" >
            <div>
            <div className="flex justify-between cursor-pointer" onClick={handleList} >
                <span className="font-bold text-lg">{props.category.title}</span>
                <span>🔽</span>
            </div>
            {
                props.expandColapse && (
                    <MenuList items={props.category.itemCards} />)
            }
          
            </div>
        </div>
    )

}

export default MenuCategory;