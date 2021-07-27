/**********************************************************************
 *
 * @模块名称: index
 *
 * @模块用途: index
 *
 * @date: 2021/7/27 16:29
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import React from 'react';
import ItemText, {Align, ItemData} from "./ItemText";

export type AlignTextProps = {
	data?: Array<ItemData>;
	align?: Align;
	lableWidth?: string | number;
	valueWidth?: string | number;
}
const AlignText: React.FC<AlignTextProps> = (props) => {
	const align = props.align || 'center';
	const data = props.data || [];
	const lableWidth = props.lableWidth || '50%';
	const valueWidth = props.valueWidth || '50%';
	return (
		<React.Fragment>
			{
				data && data.map((item: ItemData) => {
					return <ItemText key={item.lable} {...item}
					                 align={align}
					                 lableWidth={lableWidth}
					                 valueWidth={valueWidth}/>
				})
			}
		</React.Fragment>
	)
};

export default AlignText;