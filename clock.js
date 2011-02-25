$(function() {
  var time      = $("time"),
			hour1     = $("#digit1"),
		  hour2     = $("#digit2"),
		  minute1   = $("#digit3"),
		  minute2   = $("#digit4"),
		  second1   = $("#digit5"),
		  second2   = $("#digit6"),
		  body      = $("body");

  var setBackgroundColorToTime = function () {
    var t = new Date(),
		    h = t.getHours(),
		    m = t.getMinutes(),
		    s = t.getSeconds();
		
		time.attr("datetime", t.getTime());
    hour1.html(Math.floor(h / 10));
    hour2.html(h % 10);

    minute1.html(Math.floor(m / 10));
    minute2.html(m % 10);

    second1.html(Math.floor(s / 10));
    second2.html(s % 10);

		body.css("background-color", "rgb(" + parseInt((h / 24) * 255) + "," +
                        					parseInt((m / 60) * 255) + "," +
                        					parseInt((s / 60) * 255) + ")")
  };

  setBackgroundColorToTime();

	// Start the clock running
	var runClock = function(){ window.setInterval(setBackgroundColorToTime, 1000); }
	// Sync clock to sys clock
  window.setTimeout(runClock, 999-(new Date()).getMilliseconds());

	DEFAULT_FONT_FACE = "'Permanent Marker', Arial, sans-serif";
	var fontList = $("nav ul");
	fontList.delegate("li", "click", function() {
		var face = $(this).text();
		if(face == "Default") {
			face = DEFAULT_FONT_FACE;
		}
		time.css("font-family", face);
	});
});
