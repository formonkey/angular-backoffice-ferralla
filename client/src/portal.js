import 'zone.js';

import * as singleSpa from 'single-spa';

import { loadApp } from './helper'
import { GlobalEventDistributor } from './globalEventDistributor'

async function init() {
    const globalEventDistributor = new GlobalEventDistributor();

    await loadApp('ons-bootstrap', '/on-site', '/on-site/main.js', '/on-site/store.js', globalEventDistributor);
    await loadApp('bac-bootstrap', '/back-office', '/back-office/main.js', '/back-office/store.js', globalEventDistributor);

    singleSpa.start();
}

init();
