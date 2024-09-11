(function(){
//     获取mian
    function updateFontSize() {
        var main = document.getElementById('main');
        // 重新计算并设置根元素字体大小
        document.documentElement.style.fontSize = main.offsetWidth / 550 * 20 + 'px';
    }

    window.onload = function() {
        updateFontSize(); // 初始设置字体大小
        window.addEventListener('resize', updateFontSize); // 监听窗口大小变化
    }
})();//     立即执行函数
