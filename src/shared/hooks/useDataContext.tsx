import React, { createContext, useContext, useState } from 'react';

import { ProductType } from '../../modules/product/types/ProductType';

interface DataContext {
  products?: ProductType[];
}

interface DataContextProps {
  data: DataContext;
  setData: (data: DataContext) => void;
}

const DataContext = createContext({} as DataContextProps);

interface DataProviderProps {
  children: React.ReactNode;
}

export const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState<DataContext>({});
  return (
    <DataContext.Provider value={{ data: data, setData: setData }}>{children}</DataContext.Provider>
  );
};

export const useDataContext = () => {
  const { data: data, setData: setData } = useContext(DataContext);

  const setProducts = (products: ProductType[]) => {
    setData({
      ...data,
      products,
    });
  };

  return {
    products: data.products || [],
    setProducts,
  };
};
