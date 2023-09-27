import { Divider } from 'antd';
import React from 'react';

import BreadCrumb, { BreadCrumbItem } from '../breadcrumb/BreadCrumb';
import Header from '../header/Header';
import Menu from '../menu/Menu';
import { ScreenContainer } from './screen.style';

interface ScreenProps {
  children: React.ReactNode;
  listBreadCrumb?: BreadCrumbItem[];
}

const Screen = ({ children, listBreadCrumb }: ScreenProps) => {
  return (
    <>
      <Header></Header>
      <ScreenContainer>
        <Menu></Menu>
        {listBreadCrumb?.length && (
          <>
            <BreadCrumb listBreadCrumb={listBreadCrumb}></BreadCrumb>
            <Divider></Divider>
          </>
        )}
        {children}
      </ScreenContainer>
    </>
  );
};

export default Screen;
