import { BreadCrumbItem } from '../../../shared/components/breadcrumb/BreadCrumb';
import Screen from '../../../shared/components/screen/Screen';

const listBreadCrumb: BreadCrumbItem[] = [
  { name: 'Home', navigateTo: '/' },
  { name: 'Product', navigateTo: '/product' },
  { name: 'Insert product' },
];

const ProductInsert = () => {
  return (
    <Screen listBreadCrumb={listBreadCrumb}>
      <b>Insert product!</b>
    </Screen>
  );
};

export default ProductInsert;
