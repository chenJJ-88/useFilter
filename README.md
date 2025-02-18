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
npm install @chenjj/use-filter
# 或
yarn add @chenjj/use-filter
```

## 🔨 使用

```tsx
import { useFilter } from '@chenjj/use-filter';
import { FilterForm } from '@chenjj/use-filter';

// 使用 Hook
const YourComponent = () => {
  const {
    filters,
    tempFilters,
    expanded,
    handleFilterChange,
    handleSearch,
    resetFilters,
    toggleExpand,
  } = useFilter({
    initialFilters: { name: 'initial' },
    defaultExpanded: false,
    onFilterChange: (filters) => console.log(filters),
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

## 🔧 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务
npm run dev

# 运行测试
npm test

# 构建
npm run build
```

## 🤝 贡献

欢迎提交 Issue 或 Pull Request！

## 📄 许可证

[MIT](./LICENSE)