exports.repeat = function(n, c) {
	var r = '';
	for(var i = 0; i < n; ++i) {
		r += c;
	}

	return r;
};