
NumWord = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
TopWord = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
LowWord = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

$("#btn").on('click',function(){
	strArr = new Array();
	if ($('.TopWord').attr('checked')) {
	    // do something
	    strArr = strArr.concat(TopWord);
	}
	if ($('.LowWord').attr('checked')) {
	    // do something
	    strArr = strArr.concat(LowWord);
	}
	if ($('.NumWord').attr('checked')) {
	    // do something
	    strArr = strArr.concat(NumWord);
	}
	strCount = parseInt($(".strCount").val());
	console.log(strCount);
	str = randomWord(0,strCount,strCount,strArr);
	console.log(str);
	$(".strRes").val(str);
})

/**
 * randomWord 产生任意长度随机字母数字组合
 * @param randomFlag 是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位
 * @param min
 * @param max
 * @returns {string}
 */
function randomWord(randomFlag, min, max,arr){
    var str = "",
        range = min;

    // 随机产生
    if(randomFlag){
        range = Math.round(Math.random() * (max-min)) + min;
    }
    for(var i=0; i<range; i++){
        pos = Math.round(Math.random() * (arr.length-1));
        str += arr[pos];
    }
    return str;
}