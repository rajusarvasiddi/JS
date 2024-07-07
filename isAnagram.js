const str1 = "heart";
const str2 = "earth";

function isAnagram(st1, st2) {
	if (st1.length !== st2.length) {
  	return false;
  }
  if (st1.split('').sort().join('') === st2.split('').sort().join('')) {
		return true;
  }
  return false;
}

console.log('Is Anagram :: ', isAnagram(str1, str2));
