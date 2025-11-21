//相馬拓海 – Task.25 
// jQueryのreadyイベントで実行
$(function() {
    const dataElement = $('#attendance-page-data');
    const hasMissing = dataElement.data('missing-flag'); 

    //  trueであるか否か
    const isMissing = (hasMissing === true || hasMissing === 'true');

    // 3. フラグが true の場合にアラートを表示する
    if (isMissing) {
        alert("過去日の勤怠に未入力があります。");
    } 
});