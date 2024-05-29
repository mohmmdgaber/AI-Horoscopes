"use client";
import PropTypes from 'prop-types';
import Dropdown_Menu from "@/components/Dropdown_Menu";

const ListControl = (props) => {

    const handleSwitchClick = () => {
        // Pass the checkbox value to the function
        props.toggleFunc(!props.menu);
      };

  return (


    <div className="relative p-3 mb-1 mx-auto rounded-t-lg bg-slate-600 grid grid-cols-2 gap-3 w-4/5	">
        <div className="flex  justify-center">
            <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value={props.menu} className="sr-only peer" onChange={handleSwitchClick}/>
            <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Switch Layout</span>
            </label> 
        </div>      
        
        <div className="flex  justify-center">
        <Dropdown_Menu ></Dropdown_Menu>

 
        </div>   
    </div>
  )
};
ListControl.PropTypes ={

  menu: PropTypes.bool,
  toggleFunc: PropTypes.func,

}

export default ListControl
