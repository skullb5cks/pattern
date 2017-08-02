var _layer1 = new Layer(qs('._layer1'));
var _layer2 = new Layer(qs('._layer2'));
var _layer3 = new Layer(qs('._layer3'));
var _layer4 = new Layer(qs('._layer4'));

mediator.subscribe('HideAllLayer', function() {
    _layer1.hide();
    _hideDimm();
});

mediator.subscribe('HideAllLayer', function() {
    _layer2.hide();
    _hideDimm();
});

mediator.subscribe('HideAllLayer', function() {
    _layer3.hide();
    _hideDimm();
});
 
mediator.subscribe('HideAllLayer', function() {
    _layer4.hide();
    _hideDimm();
});

qs('._toggle1').addEventListener('click', function() {
    _layer1.toggle(_toggleDimm);
});

qs('._toggle1').addEventListener('blur', function() {
    mediator.publish('HideAllLayer');
});

qs('._toggle2').addEventListener('click', function() {
    _layer2.toggle(_toggleDimm);
});

qs('._toggle2').addEventListener('blur', function() {
   mediator.publish('HideAllLayer');
});

qs('._toggle3').addEventListener('click', function() {
    _layer3.toggle(_toggleDimm);
});

qs('._toggle3').addEventListener('blur', function() {
    mediator.publish('HideAllLayer');
});

qs('._toggle4').addEventListener('click', function() {
    _layer4.toggle(_toggleDimm);
});

qs('._toggle4').addEventListener('blur', function() {
   mediator.publish('HideAllLayer');
});

qs('._toggle5').addEventListener('click', function() {
    mediator.publish('HideAllLayer');
});