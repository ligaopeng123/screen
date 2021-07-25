import React from 'react';
import {Meta, Story} from '@storybook/react';
import Text1, {Text1Props} from '../src/text/Text1';

const meta: Meta = {
	title: 'text',
	component: Text1,
	argTypes: {
		children: {
			control: {
				type: 'text',
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
export const text1 = Template.bind({
	duration: {
		control: {
			type: 'number',
		},
	},
	delay: {
		control: {
			type: 'number',
		},
	},
});

text1.args = {};
