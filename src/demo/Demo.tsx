import React from 'react';
import { Card, Divider, Typography } from 'antd';
import FilterForm from '../components/FilterForm';
import { IFilters } from '../types'
const { Title, Paragraph } = Typography;

const Demo: React.FC = () => {
    const handleFilterChange = (filters: Record<string, string>) => {
        console.log('Filters changed:', filters);
    };
    const filters: IFilters = [
        {
            label: '账单时间',
            name: 'time',
            renderType: 'dateRangePicker',
            props: {
                placeholder: ['开始时间', '结束时间'],
            },
        },
        {
            label: '所属问题',
            name: 'data_type_desc',
            renderType: 'select',
            props: {
                options: [{ label: '问题1', value: '1' }, { label: '问题2', value: '2' }],
                showSearch: true,
            },
        },
        {
            label: '申请单号',
            name: 'ids',
            renderType: 'input',
            props: {
                placeholder: '支持空格或英文逗号分隔批量查询',
            },
        },
        {
            label: '状态',
            name: 'statusList',
            renderType: 'select',
            props: {
                options: [
                    { value: '0', label: '暂存' },
                    { value: '1', label: '询价中' },
                    { value: '2', label: '审批中' },
                    { value: '3', label: '下架中' },
                    { value: '4', label: '出库中' },
                    { value: '5', label: '运输中' },
                    { value: '6', label: '已完成' },
                    { value: '7', label: '已中止' },
                ],
                placeholder: '支持多选',
                mode: 'multiple',
                showSearch: true,
                optionFilterProp: "label"
            },
        },
        {
            label: '单号',
            name: 'code',
            renderType: 'input',
            props: {
                placeholder: '支持空格或英文逗号分隔批量查询',
            },
        },
    ];
    return (
        <div style={{ padding: 24, maxWidth: 1200, margin: '0 auto' }}>
            <Typography>
                <Title level={1}>useFilter Demo</Title>
                <Paragraph>
                    一个灵活的筛选表单组件，支持展开/收起、响应式布局等特性。
                </Paragraph>
            </Typography>

            <Divider />

            <Card title="基础示例">
                <FilterForm
                    filters={filters}  onFilterChange={handleFilterChange}
                />
            </Card>

            <Divider />

            <Card title="默认展开">
                <FilterForm
                    filters={filters} defaultExpanded onFilterChange={handleFilterChange}
                />
            </Card>

            <Divider />
        </div>
    );
};

export default Demo; 