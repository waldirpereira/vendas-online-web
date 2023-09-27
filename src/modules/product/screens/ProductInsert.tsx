import { useEffect } from 'react';

import { BreadCrumbItem } from '../../../shared/components/breadcrumb/BreadCrumb';
import Button from '../../../shared/components/buttons/Button';
import Input from '../../../shared/components/inputs/input/Input';
import Money from '../../../shared/components/inputs/money/Money';
import Select, { SelectOption } from '../../../shared/components/inputs/select/Select';
import Screen from '../../../shared/components/screen/Screen';
import { DisplayFlexJustifyRight } from '../../../shared/components/styles/display.style';
import { LimitedContainer } from '../../../shared/components/styles/limited.style';
import { URL_CATEGORY } from '../../../shared/constants/url';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { RoutesEnum } from '../../../shared/enums/routes.enum';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useInsertProduct } from '../hooks/useInsertProduct';
import { ProductInsertContainer, TitleBox, TitleText } from '../styles/productInsert.style';

const listBreadCrumb: BreadCrumbItem[] = [
  { name: 'Home', navigateTo: RoutesEnum.ROOT },
  { name: 'Product', navigateTo: RoutesEnum.PRODUCT },
  { name: 'Insert product' },
];

const ProductInsert = () => {
  const {
    product,
    loading,
    disabledButton,
    handleCategoryChange,
    onChangeInput,
    handleInsertProduct,
    handleCancel,
  } = useInsertProduct();
  const { categories, setCategories } = useDataContext();
  const { request } = useRequests();

  useEffect(() => {
    if (!categories.length) {
      request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    }
  }, []);

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
            onChange={(event) => onChangeInput(event, 'name')}
          ></Input>
          <Input
            value={product.image}
            title="Image URL"
            placeholder="http://..."
            margin="0px 0px 16px 0px"
            onChange={(event) => onChangeInput(event, 'image')}
          ></Input>
          <Money
            value={product.price}
            title="Price"
            placeholder="19.98"
            margin="0px 0px 16px 0px"
            onChange={(event) => onChangeInput(event, 'price')}
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
              <Button
                loading={loading}
                disabled={disabledButton}
                type="primary"
                onClick={handleInsertProduct}
              >
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
