"use client";

import { useState,useContext,createContext,useMemo } from 'react'
import PropTypes from 'prop-types';
import { FontContext } from '@/components/Body';

import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

const Dropdown_Menu =(props) => {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["font-sans"]));
  const {currentFont,setCurrentFont} = useContext(FontContext);


  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [currentFont]
  );
  const OnChangeFont = (selection) => {
    console.log(selection.currentKey);
    setCurrentFont(selection.currentKey);
    setSelectedKeys(selection);


  };
  return (
    <Dropdown >
    <DropdownTrigger>
      <Button 
        variant="bordered" 
        className="capitalize text-white"
      >
        {selectedValue}
      </Button>
    </DropdownTrigger>
    <DropdownMenu 
      aria-label="Single selection"
      variant="flat"
      disallowEmptySelection
      selectionMode="single"
      selectedKeys={selectedKeys}
      onSelectionChange={OnChangeFont}
      
    >
      <DropdownItem key="font-sans">Sans serif</DropdownItem>
      <DropdownItem key="font-mono">Monospace</DropdownItem>
      <DropdownItem key="font-serif">Serif</DropdownItem>
    </DropdownMenu>
  </Dropdown>

  );
}
Dropdown_Menu.PropTypes ={

  changeFont: PropTypes.func,

}
export default Dropdown_Menu