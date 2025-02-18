import React from 'react';
import { Story, Meta } from '@storybook/react';
import FilterForm from '../components/FilterForm';

export default {
    title: 'Components/FilterForm',
    component: FilterForm,
} as Meta;

const Template: Story = (args) => <FilterForm {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Expanded = Template.bind({});
Expanded.args = {
    defaultExpanded: true,
};

export const WithInitialValues = Template.bind({});
WithInitialValues.args = {
    initialFilters: {
        field1: '初始值1',
        field2: '初始值2',
    },
}; 