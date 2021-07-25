/**********************************************************************
 *
 * @模块名称: Text1
 *
 * @模块用途: Text1
 *
 * @date: 2021/7/21 13:35
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import React, {useEffect, useRef} from 'react';
import './styles.less';

/**
 * 参数支持
 */
export type Text1Props = {
	duration?: number;
	delay?: number
}

const Text1: React.FC<Text1Props> = (props) => {
	const divRef = useRef<HTMLDivElement>(null);
	const {duration, delay} = props;
	
	useEffect(() => {
		const _duration = duration === undefined ? 1 : duration;
		const _delay = delay === undefined ? 0 : delay;
		const revealText: any = divRef.current;
		const letters = revealText.textContent.split("");
		revealText.textContent = "";
		const middle = letters.filter((e: string) => e !== " ").length / 2;
		letters.forEach((letter: string, i: number) => {
			let span = document.createElement("span");
			span.textContent = letter;
			span.style.animation = `fadeIn ${_duration}s forwards`;
			span.style.animationDelay = `${_delay + Math.abs(i - middle) * 0.1}s`;
			revealText.append(span);
		});
	}, []);
	return (
		<React.Fragment>
			<div ref={divRef} className={`reveal`}>{props.children}</div>
		</React.Fragment>
	)
};

export default Text1;