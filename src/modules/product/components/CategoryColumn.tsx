import { Tag } from 'antd';

import { CategoryType } from '../../../shared/types/CategoryType';

interface CategoryColumnProps {
  category?: CategoryType;
}

const colors = [
  'magenta',
  'purple',
  'gold',
  'lime',
  'red',
  'green',
  'volcano',
  'cyan',
  'blue',
  'orange',
  'geekblue',
];

const CategoryColumn = ({ category }: CategoryColumnProps) => {
  if (!category) {
    return;
  }
  const currentColor = colors[category.id] || colors[0];
  return <Tag color={currentColor}>{category.name}</Tag>;
};

export default CategoryColumn;
