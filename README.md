# useFilter

[![npm version](https://img.shields.io/npm/v/use-antd-filter.svg)](https://www.npmjs.com/package/use-antd-filter)
[![GitHub license](https://img.shields.io/github/license/chenJJ-88/useFilter.svg)](https://github.com/chenJJ-88/useFilter/blob/main/LICENSE)
[![Documentation](https://img.shields.io/badge/docs-online-blue.svg)](https://chenjj-88.github.io/useFilter/)

一个基于 React 和 Ant Design 的灵活筛选表单 Hook，用于快速构建具有展开/收起功能的响应式筛选界面。

## 📚 文档

查看[在线文档和示例](https://chenjj-88.github.io/useFilter/)

## ✨ 特性

- �� 支持展开/收起功能
- 🔄 响应式布局
- 📦 开箱即用
- 🎨 基于 Ant Design
- 💡 TypeScript 支持
- ⚡️ 轻量级设计

## 📦 安装

```bash
npm install use-antd-filter
# 或
yarn add use-antd-filter
```

## 🔨 使用

```tsx
import { FilterForm } from 'use-antd-filter';
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
// 或使用内置组件
const YourPage = () => {
  return (
     <FilterForm
       filters={filters}  onFilterChange={handleFilterChange}
    />
  );
};
```

## 📖 API

### FilterForm

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| filters | 筛选项的集合  | `[]` | `[]` |
| defaultExpanded | 是否默认展开 | `boolean` | `false` |
| onFilterChange | 筛选条件变化时的回调 | `(filters: Record<string, string>) => void` | - |
| onOkText | 查询按钮文字 | string  | `查询` |
| onResetText | 重置按钮文字 | string  | `清空` |

## 📄 许可证

[MIT](./LICENSE)
