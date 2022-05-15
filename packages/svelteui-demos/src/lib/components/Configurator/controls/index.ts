import SelectControl from './SelectControl.svelte';
import ColorControl from './ColorControl.svelte';
import BooleanControl from './BooleanControl.svelte';
import StringControl from './StringControl.svelte';
import SizeControl from './SizeControl.svelte';

export const controls = {
	select: SelectControl,
	color: ColorControl,
	boolean: BooleanControl,
	string: StringControl,
	size: SizeControl
};
