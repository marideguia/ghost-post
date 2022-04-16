import React from 'react';

const Store = React.createContext();
Store.displayName = 'Store';

export const useStore = () => React.useContext(Store);

export const StoreProvider = ({ children }) => {
    const logoColor = 'red';

  return (
    <Store.Provider value={{logoColor}}>{children}</Store.Provider>
  );
};