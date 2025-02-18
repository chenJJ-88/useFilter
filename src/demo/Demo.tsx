import React from 'react';
import { Card, Divider, Typography } from 'antd';
import FilterForm from '../components/FilterForm';

const { Title, Paragraph } = Typography;

const Demo: React.FC = () => {
    const handleFilterChange = (filters: Record<string, string>) => {
        console.log('Filters changed:', filters);
    };

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
                    onFilterChange={handleFilterChange}
                />
            </Card>

            <Divider />

            <Card title="默认展开">
                <FilterForm 
                    defaultExpanded={true}
                    onFilterChange={handleFilterChange}
                />
            </Card>

            <Divider />

            <Card title="带初始值">
                <FilterForm 
                    initialFilters={{
                        field1: '初始值1',
                        field2: '初始值2',
                    }}
                    onFilterChange={handleFilterChange}
                />
            </Card>
        </div>
    );
};

export default Demo; 