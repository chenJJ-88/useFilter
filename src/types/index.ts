import React, { ReactNode, PropsWithoutRef } from 'react';
export interface FilterValue {
    key: string;
    value: string;
    label?: string;
}

export interface UseFilterOptions {
    initialFilters?: Record<string, string>;
    onFilterChange?: (filters: Record<string, string>) => void;
    defaultExpanded?: boolean;
    maxVisibleItems?: number;
}

export interface UseFilterReturn {
    filters: Record<string, string>;
    tempFilters: Record<string, string>;
    expanded: boolean;
    visibleItems?: number;
    handleFilterChange: (key: string, value: string) => void;
    handleSearch: () => void;
    resetFilters: () => void;
    toggleExpand: () => void;
} 
export interface IRenderItemProps {
    [propName: string]: any;
    value?: any;
    onChange?(eventOrValue: any): void;
}
export declare type IRenderType = 'select' | 'input' | 'datePicker' | 'dateRangePicker';
export declare type IRenderFunction = (props: IRenderItemProps) => ReactNode | null;
export interface IRenderItem {
    children?: React.ReactNode;
    /** 是否启用该筛选项 */
    enable?: boolean;
    /** 后端筛选时传递给后端的字段名，前端筛选时要筛选的字段名 */
    name?: string | string[];
    /** 渲染类型 */
    renderType?: IRenderType;
    /** select的value是否为Number类型 */
    isNumber?: boolean;
    /** 表单的label */
    label?: string;
    /** 自定义渲染 */
    render?: IRenderFunction;
    /** 默认值 */
    defaultValue?: string[] | number[] | string | number;
    props?: PropsWithoutRef<any>;
}

export declare type IFilters = IRenderItem[];