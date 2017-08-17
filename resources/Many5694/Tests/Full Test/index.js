$(document).ready(function() {
	var win = $(window);

	// Each time the user scrolls
	win.scroll(function() {
		// End of the document reached?
		if ($(document).height() - win.height() == win.scrollTop()) {
			$('#posts').append(randomQuestion());
		}
	});
});

// Generate a random post
function randomQuestion() {

	// Generate the post
	var post = '<hr>';
	post += '<div class="form-group question">';
	post += '<header><h3>(Refer to Figure 20.) Who would a Remote Pilot in Command contact to &quot;CHECK NOTAMS&quot; as it is noted in the CAUTION box regarding the unmarked balloon?</h3></header>';
	post += '<ul class="nav nav-pills"><li role="presentation"><a href="#" data-toggle="modal" data-target="#faa_modal" data-path="assets/faa/practice_test/figure_20/main-7bb39947fef2e22d315ec0cc555cad991fa39b6782cfd7875796894340f3ae68.png">Figure 20</a></li><li role="presentation"><a href="#" data-toggle="modal" data-target="#faa_modal" data-path="assets/faa/practice_test/sectional_legend-cb94b2493a47391b96791f85a9e4b6f365b14707eef1858412d46b2422fba0b0.png">Sectional Legend</a></li></ul><div class="radio"> <label> <input type="radio" name="question_4" id="question_4_answer_0" value="true"> Flight Service </label> </div> <div class="radio"> <label> <input type="radio" name="question_4" id="question_4_answer_1" value="false"> NTSB office </label> </div> <div class="radio"> <label> <input type="radio" name="question_4" id="question_4_answer_2" value="false"> FAA district office </label> </div>'
	post += '</div>';
	return post;


}