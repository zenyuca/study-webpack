import _ from 'lodash'
// 引入 css 文件
import './style.css'
import Icon from './icon.jpg'
import Data from './data.xml'

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // 在元素上动态添加一个名叫 hello 的 class
  element.classList.add('hello');

  // 添加图片到已存在的 div 中
  let image = new Image();
  image.src = Icon;

  element.appendChild(image);

  console.log(Data);

  return element;
}

document.body.appendChild(component());