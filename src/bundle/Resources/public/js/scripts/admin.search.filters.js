(function (global, doc) {
    const filterBtn = doc.querySelector('.ez-btn--filter');
    const filters = doc.querySelector('.ez-filters');
    const clearBtn = filters.querySelector('.ez-btn-clear');
    const applyBtn = filters.querySelector('.ez-btn-apply')
    const selectBtns = [...doc.querySelectorAll('.ez-btn--select')];
    const dateFields = [...doc.querySelectorAll('.ez-date-select')];
    const contentTypeSelector = doc.querySelector('.ez-content-type-selector');
    const contentTypeSelect = doc.querySelector('.ez-filters__item--content-type .ez-filters__select');
    const sectionSelect = doc.querySelector('.ez-filters__item--section .ez-filters__select');
    const lastModifiedSelect = doc.querySelector('.ez-filters__item--modified .ez-filters__select');
    const lastCreatedSelect = doc.querySelector('.ez-filters__item--created .ez-filters__select');
    const listGroupsTitle = [...doc.querySelectorAll('.ez-content-type-selector__group-title')];
    const contentTypeCheckboxes = [...doc.querySelectorAll('.ez-content-type-selector__item [type="checkbox"]')];
    const clearFilters = (event) => {
        event.preventDefault();

        const option = contentTypeSelect.querySelector('option');
        const defaultText = option.dataset.default;
        const lastModifiedModal = doc.querySelector(lastModifiedSelect.dataset.targetSelector);
        const lastCreatedModal = doc.querySelector(lastCreatedSelect.dataset.targetSelector);
        const lastModifiedPeriod = doc.querySelector(lastModifiedModal.dataset.periodSelector);
        const lastModifiedEnd = doc.querySelector(lastModifiedModal.dataset.endSelector);
        const lastCreatedPeriod = doc.querySelector(lastCreatedModal.dataset.periodSelector);
        const lastCreatedEnd = doc.querySelector(lastCreatedModal.dataset.endSelector);

        option.innerHTML = defaultText;
        contentTypeCheckboxes.forEach(checkbox => {
            checkbox.removeAttribute('checked');
            checkbox.checked = false;
        });
        sectionSelect[0].selected = true;
        lastModifiedSelect[0].selected = true;
        lastCreatedSelect[0].selected = true;
        lastModifiedSelect.querySelector('option').selected = true;
        lastModifiedPeriod.value = '';
        lastModifiedEnd.value = '';
        lastCreatedPeriod.value = '';
        lastCreatedEnd.value = '';
    };
    const toggleApplyBtnDisabledState = () => {
        const contentTypeOption = contentTypeSelect.querySelector('option');
        const isContentTypeSelected = contentTypeOption.innerHTML !== contentTypeOption.dataset.default;
        const isSectionSelected = !!sectionSelect.value;
        const isModifiedSelected = !!lastModifiedSelect.value;
        const isCreatedSelected = !!lastCreatedSelect.value;
        const isEnabled = isContentTypeSelected || isSectionSelected || isModifiedSelected || isCreatedSelected;
        const methodName = isEnabled ? 'removeAttribute' : 'setAttribute';

        applyBtn[methodName]('disabled', !isEnabled);
    };
    const toggleFiltersVisibility = (event) => {
        event.preventDefault();

        filters.classList.toggle('ez-filters--collapsed');
    };
    const toggleContentTypeSelectorVisibility = (event) => {
        event.preventDefault();

        contentTypeSelector.classList.toggle('ez-content-type-selector--collapsed');
    };
    const toggleModalVisibility = (event) => {
        const modal = $(event.target.dataset.targetSelector);

        if (event.target.value !== 'custom_range') {
            doc.querySelector(modal[0].dataset.periodSelector).value = event.target.value;
            doc.querySelector(modal[0].dataset.endSelector).value = '';

            toggleApplyBtnDisabledState();

            return;
        }

        modal.modal('show');
    };
    const toggleGroupState = (event) => {
        event.preventDefault();

        event.currentTarget.closest('.ez-content-type-selector__group').classList.toggle('ez-content-type-selector__group--collapsed');
    };
    const filterByContentType = () => {
        const selectedCheckboxes = contentTypeCheckboxes.filter(checkbox => checkbox.checked);
        const contentTypesText = selectedCheckboxes.map(checkbox => checkbox.value).join();
        const option = contentTypeSelect[0];
        const defaultText = option.dataset.default;

        option.innerHTML = contentTypesText || defaultText;

        toggleApplyBtnDisabledState();
    };
    const dateConfig = {
        formatDate: (date) => (new Date(date)).toLocaleDateString()
    };
    const checkSelectFieldsFilled = (modal) => {
        const inputs = [...modal.querySelectorAll('.ez-date-select')];
        const isFilled = inputs.every(input => !!doc.querySelector(input.dataset.targetSelector).value.trim());
        const methodName = isFilled ? 'removeAttribute' : 'setAttribute';

        modal.querySelector('.ez-btn--select')[methodName]('disabled', !isFilled);
    };
    const setSelectedDateRange = (event) => {
        const modal = event.target.closest('.ez-modal');
        const startInput = modal.querySelector('.ez-date-select--start');
        const targetStartInput = doc.querySelector(startInput.dataset.targetSelector);
        const endInput = modal.querySelector('.ez-date-select--end');
        const targetEndInput = doc.querySelector(endInput.dataset.targetSelector);
        const startDate = parseInt(targetStartInput.value, 10);
        const endDate = parseInt(targetEndInput.value, 10);
        const datePeriod = endDate - startDate;
        const secondsInDay = 60 * 60 * 24;
        const days = datePeriod / secondsInDay;

        doc.querySelector(modal.dataset.periodSelector).value = `P0Y0M${days}D`;
        doc.querySelector(modal.dataset.endSelector).value = endDate;

        toggleApplyBtnDisabledState();
    };
    const updateSourceInputValue = (sourceInput, date) => {
        if (!date.length) {
            sourceInput.value = '';
            sourceInput.dispatchEvent(event);

            return;
        }

        date = new Date(date[0]);
        date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));

        sourceInput.value = Math.floor(date.getTime() / 1000);

        checkSelectFieldsFilled(sourceInput.closest('.ez-modal'));
    };
    const initFlatPickr = (field) => {
        const sourceInput = doc.querySelector(field.dataset.targetSelector);
        const flatPickrInput = field;
        let defaultDate;

        if (sourceInput.value) {
            defaultDate = new Date(sourceInput.value * 1000);
        }

        global.flatpickr(flatPickrInput, Object.assign({}, dateConfig, {
            onChange: updateSourceInputValue.bind(null, sourceInput),
            defaultDate
        }));
    };

    dateFields.forEach(initFlatPickr);

    clearBtn.addEventListener('click', clearFilters, false);
    filterBtn.addEventListener('click', toggleFiltersVisibility, false);
    contentTypeSelect.addEventListener('click', toggleContentTypeSelectorVisibility, false);
    sectionSelect.addEventListener('change', toggleApplyBtnDisabledState, false);
    lastModifiedSelect.addEventListener('change', toggleModalVisibility, false);
    lastCreatedSelect.addEventListener('change', toggleModalVisibility, false);
    listGroupsTitle.forEach(group => group.addEventListener('click', toggleGroupState, false));
    contentTypeCheckboxes.forEach(checkbox => checkbox.addEventListener('change', filterByContentType, false));
    selectBtns.forEach(btn => btn.addEventListener('click', setSelectedDateRange, false));
})(window, document);