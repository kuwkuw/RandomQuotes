$(document).ready(function(){
	var quote='';
	var author='';

	var getQuote = function(){
				$.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?")
		  .done(function(data){
		  	quote=data.quoteText;
		  	author=data.quoteAuthor;
		    $("#quote").text(quote);
		    $("#author").text(author);
		    twttr.ready(function(){
		    	$("#twitter-share-button-container").empty();
				twttr.widgets.createShareButton('',
						document.getElementById('twitter-share-button-container'), 
						{text: quote+'\n'+author}
					);
				});
		  });
	}

	$("#get-quote").click(function(event) {
			getQuote();
	});

	window.twttr = (function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0],
	    t = window.twttr || {};
	  if (d.getElementById(id)) return t;
	  js = d.createElement(s);
	  js.id = id;
	  js.src = "https://platform.twitter.com/widgets.js";
	  fjs.parentNode.insertBefore(js, fjs);
	 
	  t._e = [];
	  t.ready = function(f) {
	    t._e.push(f);
	  };
	 
	  return t;
	}(document, "script", "twitter-wjs"));

	getQuote();

});