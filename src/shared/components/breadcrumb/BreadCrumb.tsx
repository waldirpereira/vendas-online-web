import { Breadcrumb as BreadCrumbAntd } from 'antd';
import { useNavigate } from 'react-router-dom';

export interface BreadCrumbItem {
  name: string;
  navigateTo?: string;
}

interface BreadCrumbProps {
  listBreadCrumb: BreadCrumbItem[];
}

const BreadCrumb = ({ listBreadCrumb }: BreadCrumbProps) => {
  const navigate = useNavigate();

  const handleNavigateClick = (navigateTo: string) => {
    navigate(navigateTo);
  };

  return (
    <BreadCrumbAntd>
      {listBreadCrumb.map((breadCrumbItem: BreadCrumbItem, index: number) => (
        <BreadCrumbAntd.Item key={`breadcrumb_${index}`}>
          {breadCrumbItem.navigateTo ? (
            <a onClick={() => handleNavigateClick(breadCrumbItem.navigateTo || '')}>
              {breadCrumbItem.name}
            </a>
          ) : (
            breadCrumbItem.name
          )}
        </BreadCrumbAntd.Item>
      ))}
    </BreadCrumbAntd>
  );
};

export default BreadCrumb;
