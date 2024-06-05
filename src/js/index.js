// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import CleaningField from './modules/cleaningField'
import { useDynamicAdapt } from './modules/dynamic-adapt'
import generalProductSlide from './modules/generalProductSlide'
import maskField from './modules/maskField'
import SearchLabel from './modules/searchLabel'

Fancybox.bind('[data-fancybox]', {
	// Your custom options
});

function handleDOMContentLoaded() {
	SearchLabel()
	CleaningField()
	generalProductSlide()
	maskField()
	useDynamicAdapt("max")
}

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded)