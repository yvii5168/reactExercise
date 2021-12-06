// 原始的安装工程的代码
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TestAddPage from './views/testAddPage/testAddPage';
import reportWebVitals from './reportWebVitals';  

// // 基础版本的ReactDOM挂载
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// /**  
//  * $ npm config set registry https://registry.npm.taobao.org 
//  * -- 配置后可通过下面方式来验证是否成功 
//  * $ npm config get registry 
//  * -- 或 npm info express
//  */


// // /** 
// //  * unmountComponentAtNode() 这个方法是解除渲染挂载，作用和 render 刚好相反，
// //  * 也就清空一个渲染目标中的 React 部件或 html 内容。
// //  */
// // ReactDOM.unmountComponentAtNode(document.getElementById('root'));


// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// // 学习的测试代码
// import React from 'react';
// import ReactDOM from 'react-dom';

// function Hello(props) {
//   return <h1>Hello World!</h1>;
// }

// ReactDOM.render(<Hello />, document.getElementById('root'));


// // 一、定义方法，并在页面挂载
// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>现在是 {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }
// // 二、定义类，并在页面挂载
// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>现在是{this.props.date.toLocaleTimeString()}。</h2>
//       </div>
//     );
//   }
// }

 
// function tick() {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App />
//       <TestAddPage />
//       <Clock date={new Date()} />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }
 
// setInterval(tick, 1000);


// // 引入多props传值的定义的js文件
// import TestApp from './views/testPropsPage/index.js'
// ReactDOM.render(
//   <TestApp name={"菜鸟教程"} url={"http://www.runoob.com"} nickname={"Runoob"}/>,
//  document.getElementById('root')
// );

// // 添加自定义属性data-**
// ReactDOM.render(
//   <div>
//     <h1>菜鸟教程</h1>
//     <h2>欢迎学习 React</h2>
//     <p data-myattribute = "somevalue">这是一个很不错的 JavaScript 库!</p>
//   </div>
//   ,
//   document.getElementById('root')
// );


// // 使用内联样式的camelCase语法、正确的注释方法
// var myStyle = {
//   fontSize: 100, //React 会在指定元素数字后自动添加 px
//   color: '#FF0000'
// };
// ReactDOM.render(
//   <div>
//     <h1 style = {myStyle}>菜鸟教程</h1>

//     {/* 注释的添加方法 */}

//   </div>,
//   document.getElementById('root')
// );


// React框架的JSX插入数组的方法
var arr = [
  <h1>菜鸟教程</h1>,
  <h2>学的不仅是技术，更是梦想！</h2>,
];

ReactDOM.render(
  <div>{arr}</div>,
  document.getElementById('root')
);

reportWebVitals();