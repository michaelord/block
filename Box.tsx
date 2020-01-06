import {getModifiers} from 'components/libs';
import {Padding, Theme} from 'components/types';
import React, {memo} from 'react';
import './Box.scss';

import * as Types from 'components/types';

export type BoxProps = {
	children: Types.Children;
	theme?: Types.Theme;
	pad?: Types.Padding;
};

export const Box = memo((props: BoxProps) => {
	const {pad = 'default', theme = 'default', children} = props;

	const base: string = 'box';

	const atts: object = {
		className: getModifiers(base, {
			pad: `pad-${pad}`,
		}),
		'data-theme': theme,
	};

	return <div {...atts}>{children}</div>;
});
