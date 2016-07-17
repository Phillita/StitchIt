function StitchItObject(container) {
  this.container = container;

  this.init = function() {
    this.setClick();
  };

  this.setClick = function() {
    var self = this;
    $(this.container).on('click', function(e) {
      self.enhance();
      return false;
    });
  };

  this.enhance = function() {
    $('#stitchItModalContent').text($(this.container).text());
    $('#stitchItModal').css('display', 'block');
  };
}
