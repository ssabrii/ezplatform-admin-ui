const path = require('path');

module.exports = (Encore) => {
    Encore.addEntry('ez-admin-ui-layout-css', [
        path.resolve(__dirname, '../public/scss/ezplatform-bootstrap.scss'),
        path.resolve(__dirname, '../public/scss/ezplatform.scss'),
        path.resolve('./vendor/ezsystems/ezplatform-admin-ui-modules/Resources/public/scss/ezplatform-modules.scss'),
        path.resolve('./vendor/ezsystems/ezplatform-admin-ui-assets/Resources/public/vendors/flatpickr/dist/flatpickr.min.css'),
    ])
        .addEntry('ez-admin-ui-content-edit-parts-css', [
            path.resolve(__dirname, '../public/css/alloyeditor/alloyeditor-ez.css'),
            path.resolve('./vendor/ezsystems/ezplatform-admin-ui-assets/Resources/public/vendors/leaflet/dist/leaflet.css'),
        ])
        .addEntry('ez-admin-ui-location-view-css', [
            path.resolve('./vendor/ezsystems/ezplatform-admin-ui-assets/Resources/public/vendors/leaflet/dist/leaflet.css'),
        ])
        .addEntry('ez-admin-ui-security-base-css', [
            path.resolve(__dirname, '../public/scss/ezplatform-bootstrap.scss'),
            path.resolve(__dirname, '../public/scss/ezplatform.scss'),
        ]);
};
