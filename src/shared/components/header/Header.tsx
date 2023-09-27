import { Modal } from 'antd';
import { useState } from 'react';

import { logout } from '../../functions/connection/auth';
import { HeaderContainer, LogooutIcon } from './header.style';

const Header = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  return (
    <>
      <Modal title="Warning" open={open} onOk={logout} onCancel={() => setOpen(false)} okText="Yes">
        <p>Are you sure you want to log out?</p>
      </Modal>
      <HeaderContainer>
        <LogooutIcon onClick={showModal}></LogooutIcon>
      </HeaderContainer>
    </>
  );
};

export default Header;
