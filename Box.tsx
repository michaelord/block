import * as React from 'react';

import './Box.scss';

import {getModifiers} from 'components/libs';

import {Padding, Theme} from 'components/types';

type BoxProps = {
	children: React.ReactNode;
	theme?: Theme;
	pad?: Padding;
};

export const Box = (props: BoxProps) => {
	const {pad = 'default', theme = 'default', children} = props;

	const base: string = 'box';

	const atts: object = {
		className: getModifiers(base, {
			pad: `pad-${pad}`,
		}),
		'data-theme': theme,
	};

	return <div {...atts}>{children}</div>;
};
