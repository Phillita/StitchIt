function StitchIt() {
  this.containers = [];
  this.pathname   = window.location.pathname;
  this.url        = window.location.href;

  this.init = function() {
    this.gatherElements().setEscape().appendModal();
  };

  this.gatherElements = function() {
    var self = this;
    objs = $('*').not('html, body, head, script, meta, title, [rel=stylesheet], #stitchItModal, #stitchItModalContent, #stitchItClosed, #stitchItModalMain')
    $.each(objs, function() {
      var obj = new StitchItObject(this);
      obj.init();
      self.containers.push(obj);
    });
    return this;
  };

  this.setEscape = function() {
    var self = this;

    $(document).keyup(function(e){
      if(e.keyCode === 27) {
        $.each(self.containers, function(index, obj) {
          obj.destroy();
        });
        self.containers = [];
      }
    });
    return this;
  };

  this.appendModal = function() {
    var modal = '<div id="stitchItModal" style="display: none; position: fixed; z-index: 1; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);"><div id="stitchItModalMain" style="background-color: #fefefe; margin: 15% auto; padding: 20px; border: 1px solid #888; width: 80%;"><span id="stitchItClosed" style="cursor: pointer; color: #aaa; float: right; font-size: 28px; font-weight: bold;">x</span><div id="stitchItModalContent"></div></div></div>';
    $('body').append(modal);
    $('#stitchItClosed').on('click', function() {
      $('#stitchItModal').css('display', 'none');
      return false;
    });

    window.onclick = function(event) {
      var target = $(event.target).prop('id');
      if (target === 'stitchItModal') {
        $('#stitchItModal').css('display', 'none');
      }
      return false;
    };

    return this;
  };
}
