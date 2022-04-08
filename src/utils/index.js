/**
 * 获取url的数据
 * @param {string|null} url 当前页面的url string | number
 * @returns 返回一个解析过后的url对象
 */
export const getURLParameters = (url) => {
  url = url || window.location.href;
  // match 返回的是一个匹配的数组 匹配([^?=&]+) 以?=& 开头 （+）是匹配一次或者多次的意思
  // 并且(=([^&]*)) 并且有=字符且不包含[^&]的后续字符
  const urlArr = url.match(/([^?=&]+)(=([^&]*))/g) || [];
  const urlObj = urlArr.reduce((arr, cur) => {
    arr[cur.slice(0, cur.indexOf("="))] = cur.slice(cur.indexOf("=") + 1);
    return arr;
  }, {});
  return urlObj;
};
/**
 * 打开或关闭全屏
 * @param {boolean} mode true打开 false关闭
 * @param {string} selector  需要全屏的元素
 */
export const fullscreen = (mode = true, selector = "body") => {
  mode
    ? document.querySelector(selector).requestFullscreen()
    : document.exitFullscreen();
};
