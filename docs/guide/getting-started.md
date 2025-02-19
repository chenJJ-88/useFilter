# 快速开始

## 安装

```bash
npm install use-antd-filter
# 或
yarn add use-antd-filter
```

## 基础使用

```tsx
import { FilterForm } from 'use-antd-filter';

const App = () => {
  return (
    <FilterForm 
      onFilterChange={(filters) => console.log(filters)}
    />
  );
};
``` 