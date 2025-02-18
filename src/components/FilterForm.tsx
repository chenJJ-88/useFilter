import React from 'react';
import { Row, Col, Form, Input, Button, Space } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { useFilter } from '../hooks/useFilter';

interface FilterFormProps {
    initialFilters?: Record<string, string>;
    defaultExpanded?: boolean;
    onFilterChange?: (filters: Record<string, string>) => void;
}

const FilterForm: React.FC<FilterFormProps> = ({
    initialFilters,
    defaultExpanded,
    onFilterChange
}) => {
    const {
        tempFilters,
        expanded,
        handleFilterChange,
        handleSearch,
        resetFilters,
        toggleExpand
    } = useFilter({
        initialFilters,
        defaultExpanded,
        onFilterChange
    });

    return (
        <Form layout="vertical">
            <Row gutter={[16, 16]}>
                {/* 第一行固定显示的搜索项 */}
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Form.Item label="搜索项1">
                        <Input 
                            onChange={e => handleFilterChange('field1', e.target.value)}
                            value={tempFilters['field1'] as string}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Form.Item label="搜索项2">
                        <Input 
                            onChange={e => handleFilterChange('field2', e.target.value)}
                            value={tempFilters['field2'] as string}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Form.Item label="搜索项3">
                        <Input 
                            onChange={e => handleFilterChange('field3', e.target.value)}
                            value={tempFilters['field3'] as string}
                        />
                    </Form.Item>
                </Col>

                {/* 展开后显示的搜索项 */}
                {expanded && (
                    <>
                        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                            <Form.Item label="搜索项4">
                                <Input 
                                    onChange={e => handleFilterChange('field4', e.target.value)}
                                    value={tempFilters['field4'] as string}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                            <Form.Item label="搜索项5">
                                <Input 
                                    onChange={e => handleFilterChange('field5', e.target.value)}
                                    value={tempFilters['field5'] as string}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                            <Form.Item label="搜索项6">
                                <Input 
                                    onChange={e => handleFilterChange('field6', e.target.value)}
                                    value={tempFilters['field6'] as string}
                                />
                            </Form.Item>
                        </Col>
                    </>
                )}

                {/* 操作按钮 */}
                <Col span={24}>
                    <Space>
                        <Button type="primary" onClick={handleSearch}>
                            查询
                        </Button>
                        <Button onClick={resetFilters}>
                            清空
                        </Button>
                        <Button type="link" onClick={toggleExpand}>
                            {expanded ? (
                                <>
                                    收起 <UpOutlined />
                                </>
                            ) : (
                                <>
                                    展开 <DownOutlined />
                                </>
                            )}
                        </Button>
                    </Space>
                </Col>
            </Row>
        </Form>
    );
};

export default FilterForm; 