/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableProps } from 'antd';

import { TableAntd } from './table.styles';

const Table = <RecordType extends object = any>({ ...props }: TableProps<RecordType>) => {
  return <TableAntd {...props}></TableAntd>;
};

export default Table;
