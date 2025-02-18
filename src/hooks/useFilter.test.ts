import { renderHook, act } from '@testing-library/react';
import { useFilter } from './useFilter';

describe('useFilter', () => {
    it('should initialize with default values', () => {
        const { result } = renderHook(() => useFilter());
        expect(result.current.filters).toEqual({});
        expect(result.current.expanded).toBe(false);
    });

    it('should handle filter changes', () => {
        const { result } = renderHook(() => useFilter());
        act(() => {
            result.current.handleFilterChange('name', 'John');
        });
        expect(result.current.filters).toEqual({ name: 'John' });
    });

    it('should reset filters', () => {
        const { result } = renderHook(() => useFilter({ initialFilters: { name: 'John' } }));
        act(() => {
            result.current.resetFilters();
        });
        expect(result.current.filters).toEqual({});
    });

    it('should toggle expand', () => {
        const { result } = renderHook(() => useFilter());
        act(() => {
            result.current.toggleExpand();
        });
        expect(result.current.expanded).toBe(true);
    });
});