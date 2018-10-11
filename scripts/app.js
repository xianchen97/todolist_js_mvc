$(function() {
  var _model = new model();
  var _view = new view(_model);
  var _controller = new controller(_model, _view);
});
