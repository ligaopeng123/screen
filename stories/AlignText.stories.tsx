import React from 'react';
import {Meta, Story} from '@storybook/react';
import AlignText, {AlignTextProps} from '../src/text/alignText';

const meta: Meta = {
	title: 'Text/AlignText',
	component: AlignText,
	argTypes: {
		children: {
			control: {
				type: 'text',
			},
		},
		align: {
			name: 'align',
			description: '对齐的方向',
			defaultValue: 'center',
			type: {name: 'string', required: false},
			control: {
				type: 'select',
				options: ['center', 'left', 'right'],
			}
		},
		lableWidth: {
			name: 'lableWidth',
			description: 'lable宽度',
			defaultValue: '50%',
			type: {name: 'string', required: false},
			control: {
				type: 'text',
			}
		},
		valueWidth: {
			name: 'valueWidth',
			description: 'value宽度',
			defaultValue: '50%',
			type: {name: 'string', required: false},
			control: {
				type: 'text',
			}
		},
		data: {
			name: 'data',
			description: '展示的数据',
			defaultValue: [{
				lable: '姓名',
				value: '张三'
			}, {
				lable: '身份证',
				value: '11'
			}],
			type: {name: 'object', required: false},
			control: {
				type: 'object',
			},
		}
	},
	parameters: {
		controls: {expanded: true},
	},
};

export default meta;

const Template: Story<AlignTextProps> = args => <AlignText {...args} ></AlignText>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const alignTextProps = Template.bind({});

alignTextProps.args = {};
