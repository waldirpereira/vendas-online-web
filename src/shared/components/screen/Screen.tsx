import React from 'react';

import BreadCrumb, { BreadCrumbItem } from '../breadcrumb/BreadCrumb';
import { ScreenContainer } from './screen.style';

interface ScreenProps {
  children: React.ReactNode;
  listBreadCrumb?: BreadCrumbItem[];
}

const Screen = ({ children, listBreadCrumb }: ScreenProps) => {
  return (
    <ScreenContainer>
      {listBreadCrumb?.length && <BreadCrumb listBreadCrumb={listBreadCrumb}></BreadCrumb>}
      {children}
    </ScreenContainer>
  );
};

export default Screen;
