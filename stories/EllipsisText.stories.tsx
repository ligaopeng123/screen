import React from 'react';
import {Meta, Story} from '@storybook/react';
import EllipsisText, {EllipsisTextProps} from '../src/text/ellipsisText';

const meta: Meta = {
	title: 'Text/EllipsisText',
	component: EllipsisText,
	argTypes: {
		children: {
			control: {
				type: 'text',
			},
		},
		width: {
			name: 'width',
			description: '宽度，支持百分比、calc、px',
			defaultValue: 1,
			type: {name: 'text', required: false},
			control: {
				type: 'text'
			},
		},
	},
	parameters: {
		controls: {expanded: true},
	},
};

export default meta;

const Template: Story<EllipsisTextProps> = args => <EllipsisText {...args} ></EllipsisText>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const ellipsisText = Template.bind({});

ellipsisText.args = {};
