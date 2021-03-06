'use strict';

// eslint-disable-next-line no-undef
require.config({
	baseUrl: 'js',
	paths: {

		// плагины для require
		text: 'libs/requirejs/text',
		css: 'libs/requirejs/native-css',
		app: 'app',
		component: 'component',
		auth: 'component/auth',
		modal: 'component/modal',
		base: 'component/base',
		page: 'component/page',
		server: 'server',
		jquery: 'libs/jquery-3.5.0.min',
		emojiIcons : 'libs/emojis',
		emoji : 'libs/jquery.emojiarea'
	}
});

/**
 * Абстрактная фабрика для удобного создания контролов
 */
class AbstractFactory {
    create(component, options) {
        return new component(options || {});
    }
}
// eslint-disable-next-line no-unused-vars
const factory = new AbstractFactory();

let page, musicHeader, modal, modalGallery, modalslider, modalAddPhoto, user_id, userParams = {}, globalSliderPhotos = [], globalUrlServer = 'https://tensor-school.herokuapp.com';

require(['app/main']);
