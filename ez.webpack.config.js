const path = require('path');
const fs = require('fs');
const translationsPath = path.resolve(__dirname, '../../../web/js/translations/');
const fieldTypesPath = path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/fieldType/');
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
const alloyEditor = [
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-paragraph.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-heading.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-movedown.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-moveup.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-blocktextaligncenter.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-blocktextalignjustify.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-blocktextalignleft.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-blocktextalignright.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-removeblock.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-unorderedlist.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-orderedlist.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-table.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-tablecell.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-tablerow.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-tablecolumn.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-tableremove.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-bold.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-italic.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-underline.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-subscript.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-superscript.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-quote.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-strike.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-link.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-linkedit.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-image.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-imageupdate.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-imagevariation.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-imagelink.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-imagelinkedit.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-embed.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-embedinline.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-embedupdate.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-embedaligncenter.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-embedalignleft.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-embedalignright.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-customtag.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-customtag-edit.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/buttons/ez-btn-customtag-update.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/toolbars/ez-add.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/plugins/ez-add-content.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/plugins/ez-move-element.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/plugins/ez-caret.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/plugins/ez-remove-block.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/plugins/ez-embed.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/plugins/ez-focus-block.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/plugins/ez-custom-tag.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/toolbars/config/ez-paragraph.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/toolbars/config/ez-formatted.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/toolbars/config/ez-text.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/toolbars/config/ez-list.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/toolbars/config/ez-table.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/toolbars/config/ez-link.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/toolbars/config/ez-heading.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/toolbars/config/ez-embed.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/toolbars/config/ez-embed-inline.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/toolbars/config/ez-image.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/toolbars/config/ez-image-link.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/toolbars/config/ez-custom-tag.js'),
    path.resolve(__dirname, './src/bundle/Resources/public/js/alloyeditor/src/toolbars/config/ez-custom-style.js'),
];
const fieldTypes = [];

fs.readdirSync(translationsPath).forEach((file) => {
    if (file !== 'config.js' && path.extname(file) === '.js') {
        layout.push(path.resolve(translationsPath, file));
    }
});

fs.readdirSync(fieldTypesPath).forEach((file) => {
    if (path.extname(file) === '.js') {
        fieldTypes.push(path.resolve(fieldTypesPath, file));
    }
});

module.exports = (Encore) => {
    Encore.addEntry('ez-admin-ui-layout-js', layout)
        .addEntry('ez-admin-ui-bookmark-list-js', [
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/button.state.toggle.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/button.content.edit.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.version.edit.conflict.js'),
        ])
        .addEntry('ez-admin-ui-content-draft-list-js', [
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/button.state.toggle.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/button.content.edit.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.version.edit.conflict.js'),
        ])
        .addEntry('ez-admin-ui-content-type-create-js', [
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.contenttype.selection.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.contenttype.fieldtype.js'),
        ])
        .addEntry('ez-admin-ui-content-type-edit-js', [
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.contenttype.selection.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.contenttype.fieldtype.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.contenttype.relation.default.location.js'),
        ])
        .addEntry('ez-admin-ui-content-type-list-js', [
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/button.state.toggle.js'),
        ])
        .addEntry('ez-admin-ui-content-type-view-js', [
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.location.change.language.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/sidebar/btn/contenttype.edit.js'),
        ])
        .addEntry('ez-admin-ui-content-type-group-list-js', [
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/button.state.toggle.js'),
        ])
        .addEntry('ez-admin-ui-language-list-js', [
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/button.state.toggle.js'),
        ])
        .addEntry('ez-admin-ui-object-state-list-js', [
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/button.state.toggle.js'),
        ])
        .addEntry('ez-admin-ui-object-state-group-list-js', [
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/button.state.toggle.js'),
        ])
        .addEntry('ez-admin-ui-policy-create-with-limitation-js', [
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.limitation.pick.js'),
        ])
        .addEntry('ez-admin-ui-policy-edit-js', [
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.limitation.pick.js'),
        ])
        .addEntry('ez-admin-ui-role-list-js', [path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/button.state.toggle.js')])
        .addEntry('ez-admin-ui-role-view-js', [
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/button.state.toggle.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.location.tab.js'),
        ])
        .addEntry('ez-admin-ui-role-assignment-create-js', [
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.role_assignment.add.js'),
        ])
        .addEntry('ez-admin-ui-search-js', [
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/button.content.edit.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.search.filters.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/udw/select.location.js'),
        ])
        .addEntry('ez-admin-ui-section-list-js', [
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.section.list.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/button.state.toggle.js'),
        ])
        .addEntry('ez-admin-ui-section-view-js', [
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.section.list.js'),
        ])
        .addEntry('ez-admin-ui-trash-list-js', [path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.trash.list.js')])
        .addEntry('ez-admin-ui-content-preview-js', [path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.preview.js')])
        .addEntry('ez-admin-ui-location-view-js', [
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.location.change.language.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.location.view.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.location.tab.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.location.visibility.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.location.update.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/button.content.edit.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/udw/move.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/udw/copy.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/udw/swap.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/udw/copy_subtree.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/udw/locations.tab.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/sidebar/btn/location.edit.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/sidebar/btn/user.edit.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/sidebar/btn/location.create.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/sidebar/instant.filter.js'),
            path.resolve(__dirname, '../ezplatform-admin-ui-assets/Resources/public/vendors/leaflet/dist/leaflet.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.location.load.map.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/sidebar/btn/content.edit.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.location.add.custom_url.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/button.state.toggle.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.version.edit.conflict.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.location.bookmark.js'),
        ])
        .addEntry('ez-admin-ui-modal-location-trash-container-js', [
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/button.state.checkbox.toggle.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.trash.container.js'),
        ])
        .addEntry('ez-admin-ui-modal-location-trash-single-asset-js', [
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/button.state.radio.toggle.js'),
        ])
        .addEntry('ez-admin-ui-locations-tab-js', [
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/button.state.toggle.js'),
        ])
        .addEntry('ez-admin-ui-translations-tab-js', [
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/button.state.toggle.js'),
        ])
        .addEntry('ez-admin-ui-urls-tab-js', [path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/button.state.toggle.js')])
        .addEntry('ez-admin-ui-dashboard-js', [
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/udw/browse.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/cotf/create.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/button.content.edit.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.version.edit.conflict.js'),
        ])
        .addEntry('ez-admin-ui-link-manager-list-js', [
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.linkmanager.list.js'),
        ])
        .addEntry('ez-admin-ui-link-manager-view-js', [
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/button.content.edit.js'),
        ])
        .addEntry('ez-admin-ui-change-user-password-js', [
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/user_password.change.js'),
        ])
        .addEntry('ez-admin-ui-content-edit-parts-js', [
            ...alloyEditor,
            path.resolve(__dirname, '../ezplatform-admin-ui-assets/Resources/public/vendors/leaflet/dist/leaflet.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/admin.content.edit.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/fieldType/base/base-field.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/fieldType/base/base-file-field.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/fieldType/base/base-preview-field.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/fieldType/base/base-rich-text.js'),
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/fieldType/alloyeditor/custom.tags.js'),
            ...fieldTypes,
            path.resolve(__dirname, './src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js'),
        ])
        .addEntry('ez-admin-ui-layout-css', [
            path.resolve(__dirname, './src/bundle/Resources/public/scss/ezplatform-bootstrap.scss'),
            path.resolve(__dirname, './src/bundle/Resources/public/scss/ezplatform.scss'),
            path.resolve(__dirname, '../ezplatform-admin-ui-assets/Resources/public/vendors/flatpickr/dist/flatpickr.min.css'),
        ]);

    const config = Encore.getWebpackConfig();

    config.name = 'ez-admin-ui';

    return config;
};
