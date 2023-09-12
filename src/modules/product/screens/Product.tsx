import Search from 'antd/es/input/Search';
import { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BreadCrumbItem } from '../../../shared/components/breadcrumb/BreadCrumb';
import Button from '../../../shared/components/buttons/Button';
import Screen from '../../../shared/components/screen/Screen';
import Table from '../../../shared/components/table/Table';
import { URL_PRODUCT } from '../../../shared/constants/url';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { RoutesEnum } from '../../../shared/enums/routes.enum';
import { convertNumberToMoney } from '../../../shared/functions/money';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import { CategoryType } from '../../../shared/types/CategoryType';
import { ProductType } from '../../../shared/types/ProductType';
import CategoryColumn from '../components/CategoryColumn';
import TooltipImage from '../components/TooltipImage';
import { BoxButtons, LimitSizeButton, LimitSizeInput } from '../styles/product.style';

const listBreadCrumb: BreadCrumbItem[] = [
  { name: 'Home', navigateTo: RoutesEnum.ROOT },
  { name: 'Product' },
];

const columns: ColumnsType<ProductType> = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: (_, product: ProductType) => <TooltipImage product={product}></TooltipImage>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => (a.name < b.name ? -1 : 1),
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
    render: (category: CategoryType) => <CategoryColumn category={category} />,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (_, product) => <a>{convertNumberToMoney(product.price)}</a>,
  },
];

const Product = () => {
  const { products, setProducts } = useDataContext();
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const { request } = useRequests();
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredProducts([...products]);
  }, [products]);

  useEffect(() => {
    request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts);
  }, []);

  const handleOnClickInsert = () => {
    navigate(RoutesEnum.PRODUCT_INSERT);
  };

  const onSearch = (value: string) => {
    setFilteredProducts([...products.filter((product) => product.name.includes(value))]);
  };

  return (
    <Screen listBreadCrumb={listBreadCrumb}>
      <BoxButtons>
        <LimitSizeInput>
          <Search placeholder="Search product" onSearch={onSearch}></Search>
        </LimitSizeInput>
        <LimitSizeButton>
          <Button type="primary" onClick={handleOnClickInsert}>
            Inserir
          </Button>
        </LimitSizeButton>
      </BoxButtons>

      <Table columns={columns} dataSource={filteredProducts} rowKey="id" />
    </Screen>
  );
};

export default Product;
