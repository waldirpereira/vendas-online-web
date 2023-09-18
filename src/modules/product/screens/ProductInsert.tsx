import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BreadCrumbItem } from '../../../shared/components/breadcrumb/BreadCrumb';
import Button from '../../../shared/components/buttons/Button';
import Input from '../../../shared/components/inputs/input/Input';
import Money from '../../../shared/components/inputs/money/Money';
import Select, { SelectOption } from '../../../shared/components/inputs/select/Select';
import Screen from '../../../shared/components/screen/Screen';
import { DisplayFlexJustifyRight } from '../../../shared/components/styles/display.style';
import { LimitedContainer } from '../../../shared/components/styles/limited.style';
import { URL_CATEGORY, URL_PRODUCT } from '../../../shared/constants/url';
import { InsertProduct } from '../../../shared/dtos/insertProduct.dto';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { RoutesEnum } from '../../../shared/enums/routes.enum';
import { connectionAPIPost } from '../../../shared/functions/connection/connectionAPI';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useGlobalContext } from '../../../shared/hooks/useGlobalContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import { ProductInsertContainer, TitleBox, TitleText } from '../styles/productInsert.style';

const listBreadCrumb: BreadCrumbItem[] = [
  { name: 'Home', navigateTo: RoutesEnum.ROOT },
  { name: 'Product', navigateTo: RoutesEnum.PRODUCT },
  { name: 'Insert product' },
];

const ProductInsert = () => {
  const [product, setProduct] = useState<InsertProduct>({ name: '', price: 0, image: '' });
  const { categories, setCategories } = useDataContext();
  const { request } = useRequests();
  const navigate = useNavigate();
  const { setNotification } = useGlobalContext();

  useEffect(() => {
    if (!categories.length) {
      request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    }
  }, []);

  const handleCategoryChange = (value: number) => {
    setProduct({ ...product, categoryId: value });
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, propertyName: string) => {
    setProduct({ ...product, [propertyName]: event.target.value });
  };

  const onChangeMoney = (event: React.ChangeEvent<HTMLInputElement>, propertyName: string) => {
    setProduct({ ...product, [propertyName]: Number(event.target.value) });
  };

  const handleInsertProduct = async () => {
    await connectionAPIPost(URL_PRODUCT, product)
      .then(() => {
        setNotification('Success', 'success', 'Product created!');
        navigate(RoutesEnum.PRODUCT);
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error', error.stack);
      });
  };

  const handleCancel = () => {
    navigate(RoutesEnum.PRODUCT);
  };

  return (
    <Screen listBreadCrumb={listBreadCrumb}>
      <ProductInsertContainer>
        <LimitedContainer width={400}>
          <TitleBox>
            <TitleText>Product insert</TitleText>
          </TitleBox>
          <Input
            value={product.name}
            title="Name"
            placeholder="T-shirt"
            margin="0px 0px 16px 0px"
            onChange={(event) => onChange(event, 'name')}
          ></Input>
          <Input
            value={product.image}
            title="Image URL"
            placeholder="http://..."
            margin="0px 0px 16px 0px"
            onChange={(event) => onChange(event, 'image')}
          ></Input>
          <Money
            value={product.price}
            title="Price"
            placeholder="19.98"
            margin="0px 0px 16px 0px"
            onChange={(event) => onChangeMoney(event, 'price')}
          ></Money>
          <Select
            title="Category"
            margin="0px 0px 32px 0px"
            options={categories.map(
              (category) => ({ value: category.id, label: category.name }) as SelectOption,
            )}
            onChange={handleCategoryChange}
          ></Select>

          <DisplayFlexJustifyRight>
            <LimitedContainer width={120} margin="0 8px">
              <Button danger onClick={handleCancel}>
                Cancel
              </Button>
            </LimitedContainer>
            <LimitedContainer width={120}>
              <Button type="primary" onClick={handleInsertProduct}>
                Insert product
              </Button>
            </LimitedContainer>
          </DisplayFlexJustifyRight>
        </LimitedContainer>
      </ProductInsertContainer>
    </Screen>
  );
};

export default ProductInsert;
