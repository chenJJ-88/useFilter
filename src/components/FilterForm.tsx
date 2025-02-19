import React, { useState, ReactNode } from 'react';
import { Row, Col, Form, Input, Button, Space, Select, DatePicker } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import type { IFilters, IRenderItem, IRenderType } from '../types';
import { uuid } from '../utils'
export type FormLayout = 'horizontal' | 'inline' | 'vertical';
interface FilterFormProps {
  filters: IFilters;
  onFilterChange?: (filters: Record<string, string>) => void;
  onOkText?: string;
  onResetText?: string;
  formLayout?: FormLayout,
  defaultExpanded?: boolean,
}

const FilterForm: React.FC<FilterFormProps> = ({ filters, onFilterChange, onOkText = '查询', onResetText = '清空', formLayout = 'horizontal', defaultExpanded = false }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [form] = Form.useForm();

  const handleSearch = () => {
    form.validateFields().then(values => {
      onFilterChange?.(values);
    });
  };

  const resetFilters = () => {
    form.resetFields();
    onFilterChange?.({});
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const renderFormItem = (filter: IRenderItem) => {
    const { renderType, render, props, name, label } = filter;
    if (render) {
      return render({ value: form.getFieldValue(name), onChange: value => form.setFieldsValue({ [String(name)]: value }) });
    }
    const renderTypeMap: Record<IRenderType, ReactNode> = {
      'select': <Select
        {...props} placeholder={props?.placeholder ?? `请选择${label}`} />,
      'input': <Input  {...props} placeholder={props?.placeholder ?? `请输入${label}`} />,
      'datePicker': <DatePicker  {...props} placeholder={props?.placeholder ?? `请选择${label}`} />,
      'dateRangePicker': <DatePicker.RangePicker {...props}  {...props} placeholder={props?.placeholder ?? ['开始时间', '结束时间']} />,
    }
    if (!renderType) {
      console.warn(`renderType is undefined for filter with name: ${label}`);
      return null;
    }
    if (renderType in renderTypeMap) {
      return renderTypeMap[renderType]
    } else {
      console.warn(`Unknown renderType: ${renderType}`);
      return null;
    }

  };

  const visibleFilters = expanded ? filters : filters.slice(0, 3);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>

      <Form style={{ width: '95%' }} labelWrap labelAlign='left' form={form} layout={formLayout}>
        <Row >
          {visibleFilters.map(filter => (
            <Col span={8} key={uuid()}>
              <Form.Item name={filter.name} label={filter.label} initialValue={filter.defaultValue}>
                {renderFormItem(filter)}
              </Form.Item>
            </Col>
          ))}

        </Row>
        <div style={{ marginLeft: 100 }}>
          <Space size="small">
            <Button type="primary" onClick={handleSearch}>{onOkText}</Button>
            <Button onClick={resetFilters}>{onResetText}</Button>
          </Space>
        </div>
      </Form>
      {filters.length > 3 && (
        <div >
          <Button type="link" onClick={toggleExpand}>
            {expanded ? <><UpOutlined /> 收起</> : <><DownOutlined /> 展开</>}
          </Button>
        </div>
      )}
    </div>

  );
};

export default FilterForm;
