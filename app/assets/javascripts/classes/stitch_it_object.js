function StitchItObject(container) {
  this.container = $(container);

  this.init = function() {
    this.setClick();
    this.text = this.container.clone().children().remove().end().text();
    return;
  };

  this.setClick = function() {
    var self = this;
    this.container.on('click', function(e) {
      self.enhance();
      return false;
    });

    return this;
  };

  this.enhance = function() {
    $('#stitchItModalContent').text(this.text);
    $('#stitchItModal').css('display', 'block');
    return this;
  };
}
