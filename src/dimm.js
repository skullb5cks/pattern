var _dimm = qs('.dimm');

function _hideDimm() {
    if (_dimm.style.display === 'block') {
        _dimm.style.display = 'none';
    }
}

function _showDimm() {
    if (_dimm.style.display === 'none') {
        _dimm.style.display = 'block';
    }
}
 
function _toggleDimm() {
    if (this.element.style.display === 'block') {
        _showDimm();
    } else {
        _hideDimm();
    }
}

_dimm.addEventListener('click', function() {
    mediator.publish('HideAllLayer');
    _hideDimm();
});