// script.js 예시

function checkAssault(xAsslt1, xAsslt2, xAsslt3) {
    // 예시 함수 - 폭행죄 판단 로직
    if (xAsslt1 && (xAsslt2 || xAsslt3)) {
        return "유죄";
    }
    return "무죄";
}

// 페이지 로드 후 실행 예시
document.addEventListener("DOMContentLoaded", function() {
    console.log(checkAssault(true, false, true));  // "유죄" 출력
});
