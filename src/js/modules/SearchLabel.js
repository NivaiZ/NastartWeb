export default function SearchLabel() {
	const placeholders = document.querySelectorAll("[data-action='label']");
	const inputFields = document.querySelectorAll('[data-action="input"]');

	const addClass = (element, className) => element.classList.add(className);
	const removeClass = (element, className) => element.classList.remove(className);

	if (placeholders && inputFields) {
		for (let index = 0; index < placeholders.length; index++) {
			const elementLabel = placeholders[index];
			const elementInput = inputFields[index];

			const handleInputClick = () => addClass(elementLabel, 'search__placeholder-js');
			const handleInputKeyUp = () => addClass(elementLabel, 'search__placeholder-js');
			const handleDocumentClick = (event) => {
				if (!elementInput.contains(event.target) && !elementInput.value) {
					removeClass(elementLabel, 'search__placeholder-js');
				}
			};
			const handleDocumentKeyUp = (event) => {
				if (!elementInput.contains(event.target) && !elementInput.value) {
					removeClass(elementLabel, 'search__placeholder-js');
				}
			};
			const handleInput = () => {
				elementInput.setAttribute('value', elementInput.value);
			};

			elementInput.addEventListener('click', handleInputClick);
			elementInput.addEventListener('keyup', handleInputKeyUp);
			document.addEventListener('click', handleDocumentClick);
			document.addEventListener('keyup', handleDocumentKeyUp);
			elementInput.addEventListener('input', handleInput);
		}
	}
}
