(function(doc, React, ReactDOM, eZ) {
    const contentTreeContainer = doc.querySelector('.ez-content-tree-container');
    const btn = doc.querySelector('.btn---show-content-tree');
    const toggleContentTreePanel = () => {};

    btn.addEventListener('click', toggleContentTreePanel, false);

    ReactDOM.render(React.createElement(eZ.modules.ContentTree, {}), contentTreeContainer);
})(window.document, window.React, window.ReactDOM, window.eZ);
