import 'core-js/es7/reflect';

import { Router } from '@angular/router';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { BootstrapModule } from './bootstrap';
import { environment } from '../environments/environment';

if (environment.production) {
    enableProdMode();
}

const spaProps = {
    Router,
    bootstrappedModule: null,
};

export function bootstrap(props) {
    return Promise.resolve();
}

export function mount(props) {
    createDomElement();

    return platformBrowserDynamic([
        {
            provide: 'localStoreRef',
            useValue: props.store
        },
        {
            provide: 'globalEventDispatcherRef',
            useValue: props.globalEventDistributor
        }
    ]).bootstrapModule(BootstrapModule).then(module => spaProps.bootstrappedModule = module);
}

export function unmount(props) {
    return new Promise((resolve, reject) => {
        if (spaProps.Router) {
            const routerRef = spaProps.bootstrappedModule.injector.get(spaProps.Router);

            routerRef.dispose();
        }

        spaProps.bootstrappedModule.destroy();

        delete spaProps.bootstrappedModule;

        resolve();
    });
}

function createDomElement() {
    let el = window.document.getElementById('ons-bootstrap');

    if (!el) {
        el = window.document.createElement('ons-bootstrap');

        el.id = 'ons-bootstrap';

        window.document.body.appendChild(el);
    }

    return el;
}