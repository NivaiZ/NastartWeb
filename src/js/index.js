// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import CleaningField from './modules/CleaningField'
import SearchLabel from './modules/SearchLabel'
import generalProductSlide from './modules/generalProductSlide'

Fancybox.bind('[data-fancybox]', {
	// Your custom options
});

function handleDOMContentLoaded() {
	SearchLabel()
	CleaningField()
	generalProductSlide()
	// useDynamicAdapt("max")
}

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded)