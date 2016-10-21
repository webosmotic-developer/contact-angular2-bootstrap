(function(global) {
    var paths = {
        'npm:': '/node_modules/'
    };

    var map = {
        'app': 'app',
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
        'angular2-cookie': 'npm:angular2-cookie',
        'angular2-grid': 'npm:angular2-grid/dist',
        'ng2-bs3-modal': 'node_modules/ng2-bs3-modal',
        'ng2-toastr': 'node_modules/ng2-toastr',
        'rxjs': 'npm:rxjs'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        app: { main: 'main.js',  defaultExtension: 'js' },
        'angular2-cookie': { main: './core.js', defaultExtension: 'js' },
        'angular2-grid': { main: 'main.js',  defaultExtension: 'js' },
        'ng2-bs3-modal': {defaultExtension: 'js' },
        rxjs: { defaultExtension: 'js' },
        'ng2-toastr':  { defaultExtension: 'js' }
    };

    var config = {
        defaultJSExtensions: true,
        paths: paths,
        map: map,
        packages: packages
    };

    System.config(config);
})(this);
