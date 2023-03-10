import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import './editor.scss';

export default function Edit() {
	return (
		<p {...useBlockProps()}>
			{__('Boilerplate – hello from the editor!', 'boilerplate')}
		</p>
	);
}
