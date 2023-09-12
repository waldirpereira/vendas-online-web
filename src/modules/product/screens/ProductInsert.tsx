import React, { useEffect, useState } from 'react';

import { BreadCrumbItem } from '../../../shared/components/breadcrumb/BreadCrumb';
import Button from '../../../shared/components/buttons/Button';
import Input from '../../../shared/components/inputs/input/Input';
import Select, { SelectOption } from '../../../shared/components/inputs/select/Select';
import Screen from '../../../shared/components/screen/Screen';
import { URL_CATEGORY, URL_PRODUCT } from '../../../shared/constants/url';
import { InsertProduct } from '../../../shared/dtos/insertProduct.dto';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { RoutesEnum } from '../../../shared/enums/routes.enum';
import { connectionAPIPost } from '../../../shared/functions/connection/connectionAPI';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import { LimitedContainer, TitleBox, TitleText } from '../styles/productInsert.style';

const listBreadCrumb: BreadCrumbItem[] = [
  { name: 'Home', navigateTo: RoutesEnum.ROOT },
  { name: 'Product', navigateTo: RoutesEnum.PRODUCT },
  { name: 'Insert product' },
];

const ProductInsert = () => {
  const [product, setProduct] = useState<InsertProduct>({ name: '', price: 0, image: '' });
  const { categories, setCategories } = useDataContext();
  const { request } = useRequests();

  useEffect(() => {
    if (!categories.length) {
      request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    }
  }, []);

  const handleCategoryChange = (value: number) => {
    setProduct({ ...product, categoryId: value });
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, propertyName: string) => {
    const { type } = event.target;
    const value = type === 'number' ? Number(event.target.value) : event.target.value;
    console.log(type === 'number');
    console.log({ test: value });

    setProduct({ ...product, [propertyName]: value });
  };

  const handleInsertProduct = () => {
    connectionAPIPost(URL_PRODUCT, product);
  };

  return (
    <Screen listBreadCrumb={listBreadCrumb}>
      <TitleBox>
        <TitleText>Product insert</TitleText>
      </TitleBox>
      <LimitedContainer>
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
        <Input
          value={product.price}
          type="number"
          title="Price"
          placeholder="19.98"
          margin="0px 0px 16px 0px"
          onChange={(event) => onChange(event, 'price')}
        ></Input>
        <Select
          title="Category"
          margin="0px 0px 32px 0px"
          options={categories.map(
            (category) => ({ value: category.id, label: category.name }) as SelectOption,
          )}
          onChange={handleCategoryChange}
        ></Select>

        <Button type="primary" onClick={handleInsertProduct}>
          Insert product
        </Button>
      </LimitedContainer>
    </Screen>
  );
};

export default ProductInsert;
