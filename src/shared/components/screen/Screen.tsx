import React from 'react';

import { ScreenContainer } from './screen.style';

interface ScreenProps {
  children: React.ReactNode;
}

const Screen = ({ children }: ScreenProps) => {
  return <ScreenContainer>{children}</ScreenContainer>;
};

export default Screen;
