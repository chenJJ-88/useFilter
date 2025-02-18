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