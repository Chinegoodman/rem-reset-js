
function resetrem(size) {

}
function resetrem(size) {

}
function resetrem(size) {
    if(size==320){
        // 设计稿尺寸 size==320
        document.documentElement.style.fontSize = document.documentElement.clientWidth < document.documentElement.style.fontSize / 100 ? 100: document.documentElement.style.fontSize / 100 + 'px';
        window.onresize=function () {
            document.documentElement.style.fontSize = document.documentElement.clientWidth < document.documentElement.style.fontSize / 100 ? 100: document.documentElement.style.fontSize / 100 + 'px';
        }
    }else if (size==375){
// 设计稿尺寸 size==375
        document.documentElement.style.fontSize = document.documentElement.clientWidth < document.documentElement.style.fontSize / (256/3) ? (256/3): document.documentElement.style.fontSize / (256/3) + 'px';
        window.onresize=function () {
            document.documentElement.style.fontSize = document.documentElement.clientWidth < document.documentElement.style.fontSize / (256/3) ? (256/3): document.documentElement.style.fontSize / (256/3) + 'px';
        }
    }else if(size==640){
// 设计稿尺寸 size==640
        document.documentElement.style.fontSize = document.documentElement.clientWidth < document.documentElement.style.fontSize / 200 ? 200: document.documentElement.style.fontSize / 200 + 'px';
        window.onresize=function () {
            document.documentElement.style.fontSize = document.documentElement.clientWidth < document.documentElement.style.fontSize / 200 ? 200: document.documentElement.style.fontSize / 200 + 'px';
        }
    } else if(size==750){
// 设计稿尺寸 size==750
        document.documentElement.style.fontSize = document.documentElement.clientWidth < document.documentElement.style.fontSize / (128/3) ? (128/3): document.documentElement.style.fontSize / (128/3) + 'px';
        window.onresize=function () {
            document.documentElement.style.fontSize = document.documentElement.clientWidth < document.documentElement.style.fontSize / (128/3) ? (128/3): document.documentElement.style.fontSize / (128/3) + 'px';
        }
    }
}