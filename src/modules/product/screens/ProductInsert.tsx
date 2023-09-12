import { BreadCrumbItem } from '../../../shared/components/breadcrumb/BreadCrumb';
import Screen from '../../../shared/components/screen/Screen';
import { RoutesEnum } from '../../../shared/enums/routes.enum';

const listBreadCrumb: BreadCrumbItem[] = [
  { name: 'Home', navigateTo: RoutesEnum.ROOT },
  { name: 'Product', navigateTo: RoutesEnum.PRODUCT },
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
