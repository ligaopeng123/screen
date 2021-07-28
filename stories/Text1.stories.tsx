import React from 'react';
import {Meta, Story} from '@storybook/react';
import Text1, {Text1Props} from '../src/text/text1';

const meta: Meta = {
	title: 'Text/text1',
	component: Text1,
	argTypes: {
		children: {
			control: {
				type: 'text',
			},
		},
		duration: {
			name: 'duration',
			description: '动画执行时间',
			defaultValue: 1,
			type: {name: 'number', required: false},
			control: {
				type: 'number',
			},
		},
		delay: {
			name: 'delay',
			description: '动画延迟执行时间',
			defaultValue: 0,
			type: {name: 'number', required: false},
			control: {
				type: 'number',
			},
		},
		direction: {
			name: 'direction',
			description: '动画执行方向',
			defaultValue: 'center',
			type: {name: 'string', required: false},
			control: {
				type: 'select',
				options: ['center', 'left', 'right'],
			},
		},
	},
	parameters: {
		controls: {expanded: true},
	},
};

export default meta;

const Template: Story<Text1Props> = args => <Text1 {...args} ></Text1>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const text1 = Template.bind({});

text1.args = {};
