import GlobalContext from './GlobalContext';

const GlobalContextProvider = ({children, value}) => {
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
