import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import Edit from './edit';
import save from './save';

const x = 'hello from the outside';

registerBlockType( metadata.name, {
	edit: Edit,
	save,
} );
