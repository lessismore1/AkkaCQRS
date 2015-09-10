﻿/// <reference path="../../jspm_packages/github/aurelia/framework@0.13.4/aurelia-framework.d.ts" />
/// <reference path="../../jspm_packages/github/aurelia/templating@0.13.15/aurelia-templating.d.ts" />
/// <reference path="../../jspm_packages/github/aurelia/dependency-injection@0.9.1/aurelia-dependency-injection.d.ts" />

import {autoinject, bindable} from 'aurelia-framework';

@autoinject
export class Auth {
    @bindable activeTab: string
    constructor() {
        this.activeTab = 'login';
    }
}