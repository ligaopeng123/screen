/**********************************************************************
 *
 * @模块名称: index
 *
 * @模块用途: index
 *
 * @创建人: pgli
 *
 * @date: 2021/7/28 8:07
 *
 **********************************************************************/
import React, {ReactNode} from 'react';
import './styles.less';

export type Card1Props = {
	title: string,
	children: string | ReactNode,
	selected?: boolean;
}
const Card1: React.FC<Card1Props> = (props) => {
	return (
		<React.Fragment>
			<div className={`screen-card-card1${props.selected !== undefined ? '-click' : ''}
			${props.selected ? 'screen-card-card1-selected' : ''}`}>
				<div className={`title`}>{props.title}</div>
				<div className={`body`}>{props.children}</div>
			</div>
		</React.Fragment>
	)
};

export default Card1;