# 示例

## 基础用法

```tsx
import { FilterForm } from 'use-antd-filter';

const BasicExample = () => {
  return (
    <FilterForm 
      onFilterChange={(filters) => console.log(filters)}
    />
  );
};
```

## 默认展开

```tsx
import { FilterForm } from 'use-antd-filter';

const ExpandedExample = () => {
  return (
    <FilterForm 
      defaultExpanded={true}
      onFilterChange={(filters) => console.log(filters)}
    />
  );
};
```

## 带初始值

```tsx
import { FilterForm } from 'use-antd-filter';

const WithInitialValuesExample = () => {
  return (
    <FilterForm 
      initialFilters={{
        field1: '初始值1',
        field2: '初始值2',
      }}
      onFilterChange={(filters) => console.log(filters)}
    />
  );
};
``` 