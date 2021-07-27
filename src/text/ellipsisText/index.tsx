/**********************************************************************
 *
 * @模块名称: EllipsisText
 *
 * @模块用途: EllipsisText  阶段text的显示
 *
 * @date: 2021/7/27 15:49
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import React from 'react';
import styles from './styles.module.less';

export type EllipsisTextProps = {
	children?: string,
	width?: string | number
}
const EllipsisText: React.FC<EllipsisTextProps> = (props) => {
	return (
		<React.Fragment>
			<span style={{width: props.width}} title={props.children}
			      className={styles.ellipsisText}>{props.children}</span>
		</React.Fragment>
	)
};

export default EllipsisText;