$(document).ready(function() {
	var win = $(window);

	// Each time the user scrolls
	win.scroll(function() {
		// End of the document reached?
		if ($(document).height() - win.height() == win.scrollTop()) {
			$('#posts').append(randomPost());
		}
	});
});

// Generate a random post
function randomPost() {
	// Paragraphs that will appear in the post
	var paragraphs = [
		'<p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>'
	];



	// Generate the post
	var post = '<li>';
	post += '<article>';
	post += '<header><h1>Random Article!</h1></header>';
	post += paragraphs.join('');
	post += '</article>';
	post += '</li>';

	return post;
}