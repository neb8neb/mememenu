$(document).ready( function() { 
		var subreddit = 'Memes'; // Your Subreddit without /r/
		var aRandomNum = Math.floor((Math.random() * 25) + 1); // A random number - range 25
		
		$.getJSON('http://www.reddit.com/r/'+subreddit+'/top.json?jsonp=?&show=all&limit=50&sort=top&t=month', function(data) {
			$.each(data.data.children, function(i,item){
				if (i == aRandomNum) {
					$("<img/>").attr("src", item.data.url).appendTo("#image").hide().fadeIn(2000);
					return false;
				}
			});
		});
		
});