export default function SearchLabel() {
	const placeholder = document.querySelectorAll("[data-action='label']")
	const inputField = document.querySelectorAll('[data-action="input"]')
	const searchBlock = document.querySelector('[data-action="search-field"]')

	if (placeholder && inputField && searchBlock) {
		for (let index = 0; index < placeholder.length; index++) {
			const elementLabel = placeholder[index]
			const elementInput = inputField[index]

			elementInput.addEventListener('click', () => {
				elementLabel.classList.add('search__placeholder-js')
			})

			document.addEventListener('click', (event) => {
				if (!elementInput.contains(event.target)) {
					if (!elementInput.value) {
						elementLabel.classList.remove('search__placeholder-js')
					}
				}
			})

			elementInput.addEventListener('input', () => {
				elementInput.setAttribute('value', elementInput.value)
			})
		}
	}
}