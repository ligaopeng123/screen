import React from 'react';
import {Meta, Story} from '@storybook/react';
import Card1, {Card1Props} from '../src/card/card1';

const meta: Meta = {
	title: 'Card/card1',
	component: Card1,
	argTypes: {
		children: {
			defaultValue: 'body',
			control: {
				type: 'text',
			},
		},
		title: {
			name: 'title',
			description: '标题',
			defaultValue: 'title',
			type: {name: 'string', required: false},
			control: {
				type: 'text',
			},
		},
		selected: {
			name: 'selected',
			description: '是否被选中',
			defaultValue: false,
			type: {name: 'boolean', required: false},
			control: {
				type: 'boolean',
			},
		}
	},
	parameters: {
		controls: {expanded: true},
	},
};

export default meta;

const Template: Story<Card1Props> = args => <Card1 {...args} ></Card1>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const card1 = Template.bind({});

card1.args = {};