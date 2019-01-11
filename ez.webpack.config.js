const path = require('path');
const fs = require('fs');
const translationsPath = path.resolve(__dirname, '../../../web/js/translations/');
const layout = [
    path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/helpers/request.helper.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/helpers/notification.helper.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/helpers/timezone.helper.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/helpers/content.type.helper.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.format.date.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/core/draggable.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/core/custom.dropdown.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.notifications.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/button.trigger.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/button.prevent.default.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/udw/browse.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.user.menu.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.prevent.click.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.picker.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.notifications.modal.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.location.add.translation.js'),
];

fs.readdirSync(translationsPath).forEach((file) => {
    if (file !== 'config.js' && path.extname(file) === '.js') {
        layout.push(path.resolve(translationsPath, file));
    }
});

module.exports = (Encore) => {
    Encore.addEntry('ez-admin-ui-layout-js', layout).addEntry('ez-admin-ui-layout-css', [
        path.resolve(__dirname, './src/bundle/Resources/public/scss/ezplatform-bootstrap.scss'),
        path.resolve(__dirname, './src/bundle/Resources/public/scss/ezplatform.scss'),
        path.resolve(__dirname, '../ezplatform-admin-ui-assets/Resources/public/vendors/flatpickr/dist/flatpickr.min.css'),
    ]);

    const config = Encore.getWebpackConfig();

    config.name = 'ez-admin-ui';

    return config;
};
