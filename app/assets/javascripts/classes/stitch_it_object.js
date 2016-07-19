function StitchItObject(container) {
  this.container = $(container);

  this.init = function() {
    this.setClick();
    this.text = this.container.clone().children().remove().end().text();
    return;
  };

  this.setClick = function() {
    var self = this;
    this.container.on('click', this.enhance);
    return this;
  };

  this.enhance = function() {
    $('#stitchItModalContent').text(this.text);
    $('#stitchItModal').css('display', 'block');
    return this;
  };

  this.destroy = function() {
    this.container.unbind('click', this.enhance);
  };
}
