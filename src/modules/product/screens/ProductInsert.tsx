import { Select } from 'antd';
import { useEffect } from 'react';

import { BreadCrumbItem } from '../../../shared/components/breadcrumb/BreadCrumb';
import Button from '../../../shared/components/buttons/Button';
import Input from '../../../shared/components/inputs/input/Input';
import { TitleInput } from '../../../shared/components/inputs/input/input.styles';
import Screen from '../../../shared/components/screen/Screen';
import { URL_CATEGORY } from '../../../shared/constants/url';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { RoutesEnum } from '../../../shared/enums/routes.enum';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import { LimitedContainer } from '../styles/productInsert.style';

const listBreadCrumb: BreadCrumbItem[] = [
  { name: 'Home', navigateTo: RoutesEnum.ROOT },
  { name: 'Product', navigateTo: RoutesEnum.PRODUCT },
  { name: 'Insert product' },
];

const ProductInsert = () => {
  const { categories, setCategories } = useDataContext();
  const { request } = useRequests();

  useEffect(() => {
    if (!categories.length) {
      request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    }
  }, []);

  const handleCategoryChange = () => {};

  return (
    <Screen listBreadCrumb={listBreadCrumb}>
      <h2>Insert product!</h2>
      <LimitedContainer>
        <Input title="Name" placeholder="T-shirt" margin="0px 0px 16px 0px"></Input>
        <Input title="Image URL" placeholder="http://..." margin="0px 0px 16px 0px"></Input>
        <Input title="Price" placeholder="19.98" margin="0px 0px 16px 0px"></Input>

        <TitleInput>Category</TitleInput>
        <Select
          style={{ width: '100%', margin: '0px 0px 16px 0px' }}
          onChange={handleCategoryChange}
          options={categories.map((category) => ({ value: category.id, label: category.name }))}
        ></Select>

        <Button type="primary">Insert product</Button>
      </LimitedContainer>
    </Screen>
  );
};

export default ProductInsert;
