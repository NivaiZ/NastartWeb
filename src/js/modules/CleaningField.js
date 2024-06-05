export default function CleaningField() {
	const buttonsClear = document.querySelectorAll('[data-action="cleaning"]')
	const inputFields = document.querySelectorAll('[data-action="input"]')
	const checkExist = document.querySelector('[data-action="search-field"]')

	if (checkExist && inputFields.length > 0 && buttonsClear.length > 0) {
		inputFields.forEach(inputField => {

			inputField.addEventListener('input', event =>
				handleInput(event, inputField)
			)
			inputField.addEventListener('click', event => {
				event.stopPropagation()
			})
		})

		buttonsClear.forEach(buttonClear => {
			buttonClear.addEventListener('click', event => {
				handleDeleteClick(event, buttonClear)
			})
		})


		function handleInput(event, inputField) {
			if (checkExist) {
				const buttonClear = inputField
					.closest('.search__wrapper')
					.querySelector('[data-action="cleaning"]')

				if (inputField.value.length > 0) {
					buttonClear.classList.add('search__clear-visible')
				} else {
					buttonClear.classList.remove('search__clear-visible')
				}
			}
		}

		function handleDeleteClick(event, buttonClear) {
			if (checkExist) {
				const inputField = buttonClear
					.closest('.search__wrapper')
					.querySelector('[data-action="input"]')
				inputField.value = ''
				buttonClear.classList.remove('search__clear-visible')
			}
		}
	}
}