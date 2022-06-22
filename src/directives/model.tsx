import {createEffect} from 'solid-js'

export function model(
	input: HTMLSelectElement | HTMLInputElement,
	accessor: () => [() => string, (v: string) => void],
) {
	const [getValue, setValue] = accessor()
	input.addEventListener('input', () => setValue(input.value))
	createEffect(() => (input.value = getValue()))
}
