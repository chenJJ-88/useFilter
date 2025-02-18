# useFilter

一个基于 React 和 Ant Design 的灵活筛选表单 Hook，用于快速构建具有展开/收起功能的响应式筛选界面。

## ✨ 特性

- 🎯 支持展开/收起功能
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
import { useFilter } from 'use-antd-filter';
import { FilterForm } from 'use-antd-filter';

// 使用 Hook
const YourComponent = () => {
  const {
    filters,          // 当前生效的筛选条件
    tempFilters,      // 临时筛选条件
    expanded,         // 展开/收起状态
    visibleItems,     // 可见项目数量
    handleFilterChange, // 筛选条件改变处理函数
    handleSearch,     // 查询按钮处理函数
    resetFilters,     // 重置按钮处理函数
    toggleExpand,     // 展开/收起切换函数
  } = useFilter({
    initialFilters: { name: 'initial' },
    defaultExpanded: false,
    onFilterChange: (filters) => console.log(filters),
    maxVisibleItems: 3
  });

  return (
    // 你的筛选表单
  );
};

// 或使用内置组件
const YourPage = () => {
  return (
    <FilterForm 
      initialFilters={{ name: 'initial' }}
      defaultExpanded={false}
      onFilterChange={(filters) => console.log(filters)}
    />
  );
};
```

## 📖 API

### useFilter

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| initialFilters | 初始筛选条件 | `Record<string, string>` | `{}` |
| defaultExpanded | 是否默认展开 | `boolean` | `false` |
| onFilterChange | 筛选条件变化时的回调 | `(filters: Record<string, string>) => void` | - |
| maxVisibleItems | 收起状态下显示的最大项目数 | `number` | `3` |

### FilterForm

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| initialFilters | 初始筛选条件 | `Record<string, string>` | `{}` |
| defaultExpanded | 是否默认展开 | `boolean` | `false` |
| onFilterChange | 筛选条件变化时的回调 | `(filters: Record<string, string>) => void` | - |

## 📄 许可证

[MIT](./LICENSE)