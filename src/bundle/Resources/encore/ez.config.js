const path = require('path');
const fs = require('fs');
const addJSEntries = require('./ez.js.config.js');
const addCSSEntries = require('./ez.css.config.js');

module.exports = (Encore) => {
    addJSEntries(Encore);
    addCSSEntries(Encore);

    const config = Encore.getWebpackConfig();

    config.name = 'ez-admin-ui';

    return config;
};
