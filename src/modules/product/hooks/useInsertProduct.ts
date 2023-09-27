import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_PRODUCT } from '../../../shared/constants/url';
import { InsertProduct } from '../../../shared/dtos/insertProduct.dto';
import { RoutesEnum } from '../../../shared/enums/routes.enum';
import { connectionAPIPost } from '../../../shared/functions/connection/connectionAPI';
import { useGlobalContext } from '../../../shared/hooks/useGlobalContext';

export const useInsertProduct = () => {
  const [loading, setLoading] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);
  const [product, setProduct] = useState<InsertProduct>({ name: '', price: 0, image: '' });
  const navigate = useNavigate();
  const { setNotification } = useGlobalContext();

  useEffect(() => {
    if (product.name && product.categoryId && product.image && product.price > 0) {
      setDisabledButton(false);
      return;
    }
    setDisabledButton(true);
  }, [product]);

  const handleCancel = () => {
    navigate(RoutesEnum.PRODUCT);
  };

  const handleCategoryChange = (value: number) => {
    setProduct({ ...product, categoryId: value });
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>, propertyName: string) => {
    const value = propertyName === 'price' ? Number(event.target.value) : event.target.value;
    setProduct({ ...product, [propertyName]: value });
  };

  const handleInsertProduct = async () => {
    setLoading(true);
    await connectionAPIPost(URL_PRODUCT, product)
      .then(() => {
        setNotification('Success', 'success', 'Product created!');
        navigate(RoutesEnum.PRODUCT);
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error', error.stack);
      });
    setLoading(false);
  };

  return {
    product,
    loading,
    disabledButton,
    handleCategoryChange,
    onChangeInput,
    handleInsertProduct,
    handleCancel,
  };
};
