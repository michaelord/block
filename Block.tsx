import * as React from 'react';

import {Container} from 'components/layout';
import {Media, MediaProps} from 'components/editable';
import {Size} from 'components/types';
import {getModifiers} from 'components/libs';
import {Theme} from 'components/types';

import './Block.scss';

type BlockProps = {
	header?: React.ReactNode;
	footer?: React.ReactNode;
	children: React.ReactNode;
	media?: MediaProps;
	pad?: string;
	theme?: Theme;
	width?: Size;
};

export const Block = (props: BlockProps) => {
	const base: string = 'block';

	const {children, media, pad = 'default', theme, width = 'default', header, footer} = props;

	const atts = {
		className: getModifiers(base, {
			pad: `pad-${pad}`,
		}),
		'data-theme': theme || 'default',
	};

	return (
		<div {...atts}>
			{media && (
				<div className={`${base}__media`}>
					<Media {...media} />
				</div>
			)}
			<div className={`${base}__content`}>
				<Container width={width}>
					{header}
					<div className={`${base}__body`}>
						<div className={`${base}__main`}>{children}</div>
					</div>
					{footer}
				</Container>
			</div>
		</div>
	);
};
