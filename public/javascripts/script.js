$(function() {
  $(document).keydown(function(e) {
    if(e.which == 13) {
      var value = $('#s').val().toLowerCase();
      $('#oald').empty();
      $('#vndic').empty();
      $.ajax({
        url: "http://localhost:3000/dict",
        data: { search: value }
      })
        .done(function( data ) {
	  console.log(data);
	if(!data.oaldData) {
	  $('#oald').append('CANT FIND ANY WORD!');
	}
          // Get OALD data
          var oaldResult = $(data.oaldData);
          // Make sound working
          var linkSoundUk = oaldResult.find('.audio_play_button.pron-uk').attr('data-src-mp3');
          var soundHtmlUk = '<audio id="sound1" src="' + linkSoundUk + '" preload="auto"></audio>';
          oaldResult.find('.audio_play_button.pron-uk').attr('onclick', 'document.getElementById("sound1").play()');
          var linkSoundUs = oaldResult.find('.audio_play_button.pron-us').attr('data-src-mp3');
          var soundHtmlUs = '<audio id="sound2" src="' + linkSoundUs + '" preload="auto"></audio>';
          var html = oaldResult.append(soundHtmlUk).append(soundHtmlUs);
          oaldResult.find('.audio_play_button.pron-us').attr('onclick', 'document.getElementById("sound2").play()');
          $('#oald').append(oaldResult);

          // Get 1tudien data
          var vndicResult = data.evData;
          $('#vndic').append(vndicResult);
        });
    }
  });
});
