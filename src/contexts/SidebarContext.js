import React from 'react';

export const SidebarContext = React.createContext()


const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const handleClose = () => {
    setIsOpen(false)
  }

  return <SidebarContext.Provider value={{isOpen, setIsOpen, handleClose}}>{children}</SidebarContext.Provider>;
};

export default SidebarProvider;
