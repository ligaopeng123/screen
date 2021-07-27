/**********************************************************************
 *
 * @模块名称: CenterText
 *
 *
 * @模块用途: CenterText
 *
 * @创建人: ligaoming
 *
 * @date: 2021/7/27 16:32
 *
 * @版权所有: PGLI
 *
 **********************************************************************/
import React from 'react';
import './styles.less';

export type Align = 'center' | 'left' | 'right';
export type ItemData = {
	lable?: string | number;
	value?: string | number;
	align: Align,
	lableWidth: string | number;
	valueWidth: string | number;
}
const ItemText: React.FC<ItemData> = (props) => {
	return (
		<React.Fragment>
			<div className={`screen-align-text-item screen-align-text-item-${props.align}`}>
				<div className={`lable`} style={{width: props.lableWidth}}>{props.lable}:</div>
				<div className={`value`} style={{width: props.valueWidth}}>{props.value}</div>
			</div>
		</React.Fragment>
	)
};

export default ItemText;