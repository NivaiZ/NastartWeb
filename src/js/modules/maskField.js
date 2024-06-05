import IMask from 'imask'


export default function maskField() {
	const inputFieild = document.querySelectorAll(".form__mask")

	if (inputFieild) {
		for (let i = 0; i < inputFieild.length; i++) {
			const fieldElement = inputFieild[i]
			const maskOptions = {
				mask: '+{7}(000)000-00-00'
			}
			const mask = IMask(fieldElement, maskOptions)
		}
	}
}