//String reverse
	
	//Using In-built functions

	function reverse(s) {
		return s.split('').reverse().join('');
	}
	
	console.log(reverse('horseshoe'));
	
	//Simple string concatenation, performs well on most browsers
	function reverse(s) {
		var o = '';
		for (var i = s.length - 1; i >= 0; i--)
			o += s[i];
		return o;
	}
	
	console.log(reverse('horseshoe'));
	
	//Using recursion
	function reverse(s) {
		if (s.length < 2)
			return s;
		var halfIndex = Math.ceil(s.length / 2);
		return reverse(s.substr(halfIndex)) +
			reverse(s.substr(0, halfIndex));
	}
	
	console.log(reverse('horseshoe'));