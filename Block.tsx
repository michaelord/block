import {Media, MediaProps} from 'components/editable';
import {Container} from 'components/layout';
import {getModifiers} from 'components/libs';
import * as Types from 'components/types';
import React, {memo, useRef} from 'react';
import './Block.scss';

import {useIntersection} from 'components/hooks';

type Padding = 'none' | 'md' | 'lg' | 'xl' | 'screen';

export type BlockProps = {
	id?: Types.Text;
	theme?: Types.Theme;
	header?: React.ReactNode;
	footer?: React.ReactNode;
	children: Types.Children;
	media?: MediaProps;
	pad?: Padding;
	hasOverlay?: boolean;
	width?: Types.Size;
	ref?: any;
	animation?: Types.Animation;
};

export const Block = memo((props: BlockProps): any => {
	const base: string = 'block';

	const {
		id,
		children,
		media,
		pad = 'default',
		theme = 'inherit',
		width = 'default',
		header,
		footer,
		hasOverlay = false,
		animation = 'none',
		ref = useRef(null),
	} = props;

	const intersecting = useIntersection(ref, {
		threshold: 0.5,
		// once:true
	});

	const atts = {
		className: getModifiers(base, {
			pad: `pad-${pad}`,
			overlay: hasOverlay,
			active: intersecting,
		}),
		'data-theme': theme,
		ref,
		id,
	};

	return (
		<section {...atts}>
			{media && (
				<div className={`testmedia ${base}__media`} data-animation={animation}>
					<div>
						<Media {...media} />
					</div>
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
		</section>
	);
});
