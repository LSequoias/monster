'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">monster documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-27aeb37c43a929c7bd06924d549ea2c1f25b79ab1516386f1ee4f524e990bd43a2bf45cddbacb4624f7a7be97b7bba23823f0b1961e8aece39db89e10e177bac"' : 'data-target="#xs-components-links-module-AdminModule-27aeb37c43a929c7bd06924d549ea2c1f25b79ab1516386f1ee4f524e990bd43a2bf45cddbacb4624f7a7be97b7bba23823f0b1961e8aece39db89e10e177bac"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-27aeb37c43a929c7bd06924d549ea2c1f25b79ab1516386f1ee4f524e990bd43a2bf45cddbacb4624f7a7be97b7bba23823f0b1961e8aece39db89e10e177bac"' :
                                            'id="xs-components-links-module-AdminModule-27aeb37c43a929c7bd06924d549ea2c1f25b79ab1516386f1ee4f524e990bd43a2bf45cddbacb4624f7a7be97b7bba23823f0b1961e8aece39db89e10e177bac"' }>
                                            <li class="link">
                                                <a href="components/LayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavigationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavigationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PanelControlComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PanelControlComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-1d7b35eea9e32f638e8f4c499f414a53eacaff31f3a540c6d3058beb796e264066bbc89d7ccf7ef9648a1491b6ba7b4c3ff853a5172ebfcd6a18a673f7883602"' : 'data-target="#xs-components-links-module-AppModule-1d7b35eea9e32f638e8f4c499f414a53eacaff31f3a540c6d3058beb796e264066bbc89d7ccf7ef9648a1491b6ba7b4c3ff853a5172ebfcd6a18a673f7883602"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-1d7b35eea9e32f638e8f4c499f414a53eacaff31f3a540c6d3058beb796e264066bbc89d7ccf7ef9648a1491b6ba7b4c3ff853a5172ebfcd6a18a673f7883602"' :
                                            'id="xs-components-links-module-AppModule-1d7b35eea9e32f638e8f4c499f414a53eacaff31f3a540c6d3058beb796e264066bbc89d7ccf7ef9648a1491b6ba7b4c3ff853a5172ebfcd6a18a673f7883602"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-739f8c01db745812ff72656a813bbe712fecc9edb58df47880b17b62eee6206f4e9a47d09c04de1e7cf7f1efe1522047e6c7260aeab9cee196db42ab74a3024d"' : 'data-target="#xs-components-links-module-AuthModule-739f8c01db745812ff72656a813bbe712fecc9edb58df47880b17b62eee6206f4e9a47d09c04de1e7cf7f1efe1522047e6c7260aeab9cee196db42ab74a3024d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-739f8c01db745812ff72656a813bbe712fecc9edb58df47880b17b62eee6206f4e9a47d09c04de1e7cf7f1efe1522047e6c7260aeab9cee196db42ab74a3024d"' :
                                            'id="xs-components-links-module-AuthModule-739f8c01db745812ff72656a813bbe712fecc9edb58df47880b17b62eee6206f4e9a47d09c04de1e7cf7f1efe1522047e6c7260aeab9cee196db42ab74a3024d"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MonsterModule.html" data-type="entity-link" >MonsterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MonsterModule-d59c13d735023147db9c2e8673323fcec46f22bf3cf88ee56e4a1e451e167c26b7dd7853619d1806c434a8c1edb4ecab64bc5aef26375508af3a7de477d25f50"' : 'data-target="#xs-components-links-module-MonsterModule-d59c13d735023147db9c2e8673323fcec46f22bf3cf88ee56e4a1e451e167c26b7dd7853619d1806c434a8c1edb4ecab64bc5aef26375508af3a7de477d25f50"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MonsterModule-d59c13d735023147db9c2e8673323fcec46f22bf3cf88ee56e4a1e451e167c26b7dd7853619d1806c434a8c1edb4ecab64bc5aef26375508af3a7de477d25f50"' :
                                            'id="xs-components-links-module-MonsterModule-d59c13d735023147db9c2e8673323fcec46f22bf3cf88ee56e4a1e451e167c26b7dd7853619d1806c434a8c1edb4ecab64bc5aef26375508af3a7de477d25f50"' }>
                                            <li class="link">
                                                <a href="components/AddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IndexComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MonsterRoutingModule.html" data-type="entity-link" >MonsterRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link" >PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PublicModule-d881cb789d546c64a639be78ec7796673a94c2bc1e63e5dbcd472d6531eff2e1e2402554147b826b7b7d92e29b59c8e27d964343fdbfbfc2a4b567b2011f2027"' : 'data-target="#xs-components-links-module-PublicModule-d881cb789d546c64a639be78ec7796673a94c2bc1e63e5dbcd472d6531eff2e1e2402554147b826b7b7d92e29b59c8e27d964343fdbfbfc2a4b567b2011f2027"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-d881cb789d546c64a639be78ec7796673a94c2bc1e63e5dbcd472d6531eff2e1e2402554147b826b7b7d92e29b59c8e27d964343fdbfbfc2a4b567b2011f2027"' :
                                            'id="xs-components-links-module-PublicModule-d881cb789d546c64a639be78ec7796673a94c2bc1e63e5dbcd472d6531eff2e1e2402554147b826b7b7d92e29b59c8e27d964343fdbfbfc2a4b567b2011f2027"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublicRoutingModule.html" data-type="entity-link" >PublicRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/LayoutComponent-1.html" data-type="entity-link" >LayoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NavigationComponent-1.html" data-type="entity-link" >NavigationComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});