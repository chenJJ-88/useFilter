import { useState, useCallback } from 'react';
import type { UseFilterOptions, UseFilterReturn } from '../types';

/**
 * useFilter hook - 用于处理筛选表单的状态管理
 * @param {UseFilterOptions} options - 配置选项
 * @returns {UseFilterReturn} 返回筛选相关的状态和方法
 * @example
 * ```tsx
 * const {
 *   filters,
 *   tempFilters,
 *   expanded,
 *   handleFilterChange,
 *   handleSearch,
 *   resetFilters,
 *   toggleExpand
 * } = useFilter({
 *   initialFilters: { name: 'John' },
 *   onFilterChange: (filters) => console.log(filters),
 *   defaultExpanded: false,
 *   maxVisibleItems: 3
 * });
 * ```
 */
function useFilter({ 
    initialFilters = {}, 
    onFilterChange,
    defaultExpanded = false,
    maxVisibleItems = 3
}: UseFilterOptions = {}): UseFilterReturn {
    // 存储筛选条件
    const [filters, setFilters] = useState<Record<string, string>>(initialFilters);
    // 控制展开/收起状态
    const [expanded, setExpanded] = useState(defaultExpanded);
    // 存储临时筛选条件，只有点击查询按钮时才会真正应用
    const [tempFilters, setTempFilters] = useState<Record<string, string>>(initialFilters);

    // 计算可见项目数
    const visibleItems = expanded ? undefined : maxVisibleItems as number;

    const handleFilterChange = useCallback((key: string, value: string) => {
        setTempFilters(prev => ({
            ...prev,
            [key]: value
        }));
    }, []);

    // 查询按钮处理函数
    const handleSearch = useCallback(() => {
        setFilters(tempFilters);
        onFilterChange?.(tempFilters);
    }, [tempFilters, onFilterChange]);

    // 重置按钮处理函数
    const resetFilters = useCallback(() => {
        const emptyFilters = {};
        setFilters(emptyFilters);
        setTempFilters(emptyFilters);
        onFilterChange?.(emptyFilters);
    }, [onFilterChange]);

    // 展开/收起切换
    const toggleExpand = useCallback(() => {
        setExpanded(prev => !prev);
    }, []);

    return {
        filters,          // 当前生效的筛选条件
        tempFilters,      // 临时筛选条件
        expanded,         // 展开/收起状态
        visibleItems,     // 可见项目数量
        handleFilterChange, // 筛选条件改变处理函数
        handleSearch,     // 查询按钮处理函数
        resetFilters,     // 重置按钮处理函数
        toggleExpand,     // 展开/收起切换函数
    };
}

export { useFilter };