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


// // React框架的JSX插入数组的方法
// var arr = [
//   <h1>菜鸟教程</h1>,
//   <h2>学的不仅是技术，更是梦想！</h2>,
// ];

// ReactDOM.render(
//   <div>{arr}</div>,
//   document.getElementById('root')
// );

// reportWebVitals();


// // 在React中使用复合组件开发
// function Name(props) {
//   return <h1>网站名称：{props.name}</h1>;
// }
// function Url(props) {
//   return <h1>网站地址：{props.url}</h1>;
// }
// function Nickname(props) {
//   return <h1>网站小名：{props.nickname}</h1>;
// }
// function HtmlApp() {
//   return (
//   <div>
//       <Name name="菜鸟教程" />
//       <Url url="http://www.runoob.com" />
//       <Nickname nickname="Runoob" />
//   </div>
//   );
// }

// ReactDOM.render(
//    <HtmlApp />,
//   document.getElementById('root')
// );

// // React State实例
// /**
//  * componentDidMount() 与 componentWillUnmount() 方法被称作生命周期钩子。
// 在组件输出到 DOM 后会执行 componentDidMount() 钩子，我们就可以在这个钩子上设置一个定时器。
// this.timerID 为定时器的 ID，我们可以在 componentWillUnmount() 钩子中卸载定时器。
//  * 
// */
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }
 
//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }
 
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }
 
//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }
 
// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );

// // React State自顶向下或单向数据流，且多个组件之间的数据是独立的
// function FormattedDate(props) {
//   return <h2>现在是 {props.date.toLocaleTimeString()}.</h2>;
// }
 
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }
 
//   componentDidMount() {
//     /*方法一：所列举将箭头函数用法恢复成常规写法，报错：tick() 不是一个方法的原因在于 setInterval 
//       是 window 的方法，内闭包使用 this 当然也指向 window，window 没有 tick() 方法故报错。
//     */
//     let _this = this;
//     this.timerID = setInterval(
//       /*()=>this.tick() 是 ES6 中声明函数的一种方式，叫做箭头函数表达式，
//       引入箭头函数有两个方面的作用：更简短的函数并且不绑定 this。*/ 
//       _this.tick(),
//       1000
//     );
//     // /*方法二（推荐）：()=>this.tick() 是 ES6 中声明函数的一种方式，叫做箭头函数表达式，
//     // 引入箭头函数有两个方面的作用：更简短的函数并且不绑定 this。*/ 
//     // this.timerID = setInterval(
//     //   () => this.tick(),
//     //   1000
//     // );
//   }
 
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }
 
//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }
 
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <FormattedDate date={this.state.date} />
//       </div>
//     );
//   }
// }
 
// function HtmlApp() {
//   return (
//     <div>
//       <Clock />
//       <Clock />
//       <Clock />
//     </div>
//   );
// }
 
// ReactDOM.render(<HtmlApp />, document.getElementById('root'));


// // state 和 props 主要的区别在于 props 是不可变的，而 state 可以根据与用户交互来改变。
// // 这就是为什么有些容器组件需要定义 state 来更新和修改数据。 而子组件只能通过 props 来传递数据。
// // 通过组件类的 defaultProps 属性为 props 设置默认值
// class HelloMessage extends React.Component {
//   render() {
//     return (
//       <h1>Hello, {this.props.name}</h1>
//     );
//   }
// }
 
// HelloMessage.defaultProps = {
//   name: 'Runoob'
// };
 
// const element = <HelloMessage/>;
 
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// // state属性传值：
// class WebSite extends React.Component {
//   constructor() {
//       super();
 
//       this.state = {
//         name: "菜鸟教程",
//         site: "https://www.runoob.com"
//       }
//     }
//   render() {
//     return (
//       <div>
//         <Name name={this.state.name} />
//         <Link site={this.state.site} />
//       </div>
//     );
//   }
// }
 
// class Name extends React.Component {
//   render() {
//     return (
//       <h1>{this.props.name}</h1>
//     );
//   }
// }
 
// class Link extends React.Component {
//   render() {
//     return (
//       <a href={this.props.site}>
//         {this.props.site}
//       </a>
//     );
//   }
// }
 
// ReactDOM.render(
//   <WebSite />,
//   document.getElementById('root')
// );

// props验证实例

// React的知识点：
/**事件的添加：
 * <button onClick={activateLasers}>
    激活按钮
  </button>
 * 
*/
/**
 * 在 React 中另一个不同是你不能使用返回 false 的方式阻止默认行为， 你必须明确使用 preventDefault
 * function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('链接被点击');
  }
 
  return (
    <a href="#" onClick={handleClick}>
      点我
    </a>
  );
}
*/


// /**
//  * 你必须谨慎对待 JSX 回调函数中的 this，类的方法默认是不会绑定 this 的。如果你忘记
//  * 绑定 this.handleClick 并把它传入 onClick, 当你调用这个函数的时候 this 的值会是 undefined。
//  * 这并不是 React 的特殊行为；它是函数如何在 JavaScript 中运行的一部分。通常情况下，如果你没有
//  * 在方法后面添加 () ，例如 onClick={this.handleClick}，你应该为这个方法绑定 this。
//  * */ 
// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};
 
//     // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
//     this.handleClick = this.handleClick.bind(this);
//   }
 
//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }
 
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }
 
// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root')
// );


// // 向事件处理程序传递参数
// class Popper extends React.Component{
//   constructor(){
//       super();
//       this.state = {name:'Hello world!'};
//   }
  
//   preventPop(name, e){    //事件对象e要放在最后
//       e.preventDefault();
//       alert(name);
//   }
//   preventPopOther(name, e){    //事件对象e要放在最后
//       alert(name);
//       console.log(e);
//   }
  
//   render(){
//       return (
//           <div>
//               <p>hello</p>
//               {/* 通过 bind() 方法传递参数。 */}
//               <a href="https://reactjs.org" onClick={this.preventPop.bind(this,this.state.name)}>Click</a>
//               <br />
//               <a href="https://reactjs.org" onClick={(e)=>this.preventPop(this.state.name, e)}>ClickOther</a>
//               <br />
//               <a href="https://reactjs.org" target="_blank">ClickNewPage</a>
//           </div>
//       );
//   }
// }
// ReactDOM.render(
//   <Popper />,
//   document.getElementById('root')
// );


// // React条件渲染
// function UserGreeting(props) {
//   return <h1>欢迎回来!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>请先注册。</h1>;
// }
// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// function GreetingBoth() {
//   return <div>
//     <Greeting isLoggedIn={false} />
//     {/*尝试修改 isLoggedIn={true}:*/}
//     <Greeting isLoggedIn={true} />
//   </div>
// }

// ReactDOM.render(
//   <GreetingBoth />,
//   document.getElementById('root')
// );


// // React元素变量
// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }

//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;

//     // if (isLoggedIn) {
//     //   button = <LogoutButton onClick={this.handleLogoutClick} />;
//     // } else {
//     //   button = <LoginButton onClick={this.handleLoginClick} />;
//     // }
//     // 三目运算符
//     button = isLoggedIn ? <LogoutButton onClick={this.handleLogoutClick} /> : <LoginButton onClick={this.handleLoginClick} />;

//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }

// function UserGreeting(props) {
//   return <h1>欢迎回来!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>请先注册。</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       登陆
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       退出
//     </button>
//   );
// }

// ReactDOM.render(
//   <LoginControl />,
//   document.getElementById('root')
// );


// // 与运算符 &&
// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Hello!</h1>
//       {unreadMessages.length > 0 &&
//       <div>
//         <h2>
//           您有 {unreadMessages.length} 条未读信息。
//         </h2>
//         <p>他们分别为：</p>
//         <ul>
//           {
//             unreadMessages.map((item, index) => {
//               return <li key={index}>第{index+1}条，为{item}</li>
//             })
//           }
//         </ul>

//       </div>
//       }
//     </div>
//   );
// }
 
// const messages = ['React', 'Re: React', 'Re:Re: React'];
// ReactDOM.render(
//   <Mailbox unreadMessages={messages} />,
//   document.getElementById('root')
// );


// // 三目运算符，代码示例：
// render() {
//   const isLoggedIn = this.state.isLoggedIn;
//   return (
//     <div>
//       {isLoggedIn ? (
//         <LogoutButton onClick={this.handleLogoutClick} />
//       ) : (
//         <LoginButton onClick={this.handleLoginClick} />
//       )}
//     </div>
//   );
// }


// // 阻止组件渲染
// // 组件的 render 方法返回 null 并不会影响该组件生命周期方法的回调。例如，componentWillUpdate 
// // 和 componentDidUpdate 依然可以被调用。
// function WarningBanner(props) {
//   if (!props.warn) {
//     return null;
//   }
 
//   return (
//     <div className="warning">
//       警告!
//     </div>
//   );
// }
 
// class Page extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {showWarning: true}
//     this.handleToggleClick = this.handleToggleClick.bind(this);
//   }
 
//   handleToggleClick() {
//     this.setState(prevState => ({
//       showWarning: !prevState.showWarning
//     }));
//   }
 
//   render() {
//     return (
//       <div>
//         <WarningBanner warn={this.state.showWarning} />
//         <button onClick={this.handleToggleClick}>
//           {this.state.showWarning ? '隐藏' : '显示'}
//         </button>
//       </div>
//     );
//   }
// }
 
// ReactDOM.render(
//   <Page />,
//   document.getElementById('root')
// );


// // React 列表 & Keys
// // 如果列表可以重新排序，我们不建议使用索引来进行排序，因为这会导致渲染变得很慢。
// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number, index) =>
//   <li key={number.toString()}>索引为：{index}，数值为:{number}</li>
// );
 
// ReactDOM.render(
//   <ul>{listItems}</ul>,
//   document.getElementById('root')
// );

// // key的正确的使用方式
// // key 会作为给 React 的提示，但不会传递给你的组件。如果您的组件中需要使用和 key 相同的值，
// // 请将其作为属性传递：
// /**
//  * const content = posts.map((post) =>
//   <Post
//     key={post.id}
//     id={post.id}
//     title={post.title} />
// );
// */
// function ListItem(props) {
//   // 对啦！这里不需要指定key:
//   return <li>索引为：{props.index}，数值为：{props.value}</li>;
// }
 
// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number, index) =>
//     // 又对啦！key应该在数组的上下文中被指定
//     <ListItem key={number.toString()}
//               value={number} index={index} />
 
//   );
//   return (
//     <ul>
//       {listItems}
//     </ul>
//   );
// }
 
// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );

// React 组件 API
// 在本章节中我们将讨论 React 组件 API。我们将讲解以下7个方法:

// 一、设置状态：setState
/**
 * setState(object nextState[, function callback])
 * 参数说明:
  nextState，将要设置的新状态，该状态会和当前的state合并
  callback，可选参数，回调函数。该函数会在setState设置成功，且组件重新渲染后调用。
  合并nextState和当前state，并重新渲染组件。setState是React事件处理函数中和请求回
  调函数中触发UI更新的主要方法。
*/
// // setState的实例
// class Counter extends React.Component{
//   constructor(props) {
//       super(props);
//       this.state = {clickCount: 0};
//       this.handleClick = this.handleClick.bind(this);
//   }
  
//   handleClick() {
//     this.setState(function(state) {
//       return {clickCount: state.clickCount + 1};
//     });
//   }
//   render () {
//     let btnStyle ={ "color": "red", "background": "pink", "padding": "10px 10px"}
//     return (<h2 onClick={this.handleClick}><span style={btnStyle}>点我！</span>点击次数为: {this.state.clickCount}</h2>);
//   }
// }
// ReactDOM.render(
//   <Counter />,
//   document.getElementById('root')
// );
// 二、替换状态：replaceState
/**
 * replaceState(object nextState[, function callback])
 * 参数说明：
    nextState，将要设置的新状态，该状态会替换当前的state。
    callback，可选参数，回调函数。该函数会在replaceState设置成功，且组件重新渲染后调用。
    replaceState()方法与setState()类似，但是方法只会保留nextState中状态，原state不在nextState
中的状态都会被删除。
*/
// 三、设置属性：setProps
/**
 * setProps(object nextProps[, function callback])
 * 参数说明：
    nextProps，将要设置的新属性，该状态会和当前的props合并
    callback，可选参数，回调函数。该函数会在setProps设置成功，且组件重新渲染后调用。
    设置组件属性，并重新渲染组件。
    props相当于组件的数据流，它总是会从父组件向下传递至所有的子组件中。当和一个外部的JavaScript应用集成时，
    我们可能会需要向组件传递数据或通知React.render()组件需要重新渲染，可以使用setProps()。
    更新组件，我可以在节点上再次调用React.render()，也可以通过setProps()方法改变组件属性，触发组件重新渲染。
*/
// 四、替换属性：replaceProps
/**
 * replaceProps(object nextProps[, function callback])
 * 参数说明：
    nextProps，将要设置的新属性，该属性会替换当前的props。
    callback，可选参数，回调函数。该函数会在replaceProps设置成功，且组件重新渲染后调用。
    replaceProps()方法与setProps类似，但它会删除原有 props。
*/
// 五、强制更新：forceUpdate
/**
 * forceUpdate([function callback])
 * 参数说明：
    callback，可选参数，回调函数。该函数会在组件render()方法调用后调用。
    forceUpdate()方法会使组件调用自身的render()方法重新渲染组件，组件的子组件也会调用自己的render()。
    但是，组件重新渲染时，依然会读取this.props和this.state，如果状态没有改变，那么React只会更新DOM。
    forceUpdate()方法适用于this.props和this.state之外的组件重绘（如：修改了this.state后），通过该方法
    通知React需要调用render()
    一般来说，应该尽量避免使用forceUpdate()，而仅从this.props和this.state中读取状态并由React触发
    render()调用。
*/
// 六、获取DOM节点：findDOMNode
/**
 * DOMElement findDOMNode()
 * 参数说明：
    返回值：DOM元素DOMElement
    如果组件已经挂载到DOM中，该方法返回对应的本地浏览器 DOM 元素。当render返回null 或 false时，
    this.findDOMNode()也会返回null。从DOM 中读取值的时候，该方法很有用，如：获取表单字段的值和
    做一些 DOM 操作。
*/
// 七、判断组件挂载状态：isMounted
/**
 * bool isMounted()
 * 参数说明：
    返回值：true或false，表示组件是否已挂载到DOM中
    isMounted()方法用于判断组件是否已挂载到DOM中。可以使用该方法保证了setState()和forceUpdate()在异
    步场景下的调用不会出错。
*/
/**
 * 注意事项：
 * isMounted 的方法在 ES6 中已经废除。主要的原因是它经过实际使用与测试可能不足以检测组件是否挂载，尤其
 * 是对于有一些异步的程序情况，以及逻辑上造成混乱。现在用以下方法代替：
    componentDidMount() {
        this.mounted = true;
    }

    componentWillUnmount() {
        this.mounted = false;
    }
*/

// React 组件生命周期
/**
 * 组件的生命周期可分成三个状态：
    Mounting(挂载)：已插入真实 DOM
    Updating(更新)：正在被重新渲染
    Unmounting(卸载)：已移出真实 DOM
*/
// 一、挂载：
/**
 * 挂载
  当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：
    constructor(): 在 React 组件挂载之前，会调用它的构造函数。
    getDerivedStateFromProps(): 在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。
    render(): render() 方法是 class 组件中唯一必须实现的方法。
    componentDidMount(): 在组件挂载后（插入 DOM 树中）立即调用。
    render() 方法是 class 组件中唯一必须实现的方法，其他方法可以根据自己的需要来实现。
*/
// 二、更新
/**
 * 更新
  每当组件的 state 或 props 发生变化时，组件就会更新。
  当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：
    getDerivedStateFromProps(): 在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。
    根据 shouldComponentUpdate() 的返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。
    shouldComponentUpdate():当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用。
    render(): render() 方法是 class 组件中唯一必须实现的方法。
    getSnapshotBeforeUpdate(): 在最近一次渲染输出（提交到 DOM 节点）之前调用。
    componentDidUpdate(): 在更新后会被立即调用。
    render() 方法是 class 组件中唯一必须实现的方法，其他方法可以根据自己的需要来实现。
*/
// 三、卸载
/**
 * 卸载
  当组件从 DOM 中移除时会调用如下方法：
    componentWillUnmount(): 在组件卸载及销毁之前直接调用。  
*/
// // React 组件生命周期的实例一：
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }
 
//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }
 
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }
 
//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }
 
//   render() {
//     return (
//       <div>
//         <h1>Hello, Runoob!</h1>
//         <h2>现在时间是：{this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }
 
// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );

// // React组件生命周期的实例二：
// class Hello extends React.Component {
 
//   constructor(props) {
//       super(props);
//       this.state = {opacity: 1.0};
//   }
 
//   componentDidMount() {
//     this.timer = setInterval(function () {
//       var opacity = this.state.opacity;
//       opacity -= .05;
//       if (opacity < 0.1) {
//         opacity = 1.0;
//       }
//       this.setState({
//         opacity: opacity
//       });
//     }.bind(this), 100);
//   }
 
//   render () {
//     return (
//       <div style={{opacity: this.state.opacity}}>
//         Hello {this.props.name}
//       </div>
//     );
//   }
// }
 
// ReactDOM.render(
//   <Hello name="world"/>,
//   // document.body //方式一
//   document.getElementById("root") // 方式二
// );

// // React生命周期的实例三：
// class Button extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {data: 0};
//       this.setNewNumber = this.setNewNumber.bind(this);
//   }
  
//   setNewNumber() {
//     this.setState({data: this.state.data + 1})
//   }
//   render() {
//       return (
//          <div>
//             <button onClick = {this.setNewNumber}>INCREMENT</button>
//             <Content myNumber = {this.state.data}></Content>
//          </div>
//       );
//     }
// }
// class Content extends React.Component {
//   componentWillMount() {
//       console.log('Component WILL MOUNT!')
//   }
//   componentDidMount() {
//        console.log('Component DID MOUNT!')
//   }
//   componentWillReceiveProps(newProps) {
//         console.log('Component WILL RECEIVE PROPS!')
//   }
//   shouldComponentUpdate(newProps, newState) {
//         return true;
//   }
//   componentWillUpdate(nextProps, nextState) {
//         console.log('Component WILL UPDATE!');
//   }
//   componentDidUpdate(prevProps, prevState) {
//         console.log('Component DID UPDATE!')
//   }
//   componentWillUnmount() {
//          console.log('Component WILL UNMOUNT!')
//   }
 
//     render() {
//       return (
//         <div>
//           <h3>{this.props.myNumber}</h3>
//         </div>
//       );
//     }
// }
// ReactDOM.render(
//    <div>
//       <Button />
//    </div>,
//   document.getElementById('root')
// );


// // React AJAX
// jquery的引入存在问题
// import { $ } from 'https://cdn.staticfile.org/jquery/2.1.4/jquery.min.js'
// class UserGist extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {username: '', lastGistUrl: ''};
//   }
 
 
//   componentDidMount() {
//     this.serverRequest = $.get(this.props.source, function (result) {
//       var lastGist = result[0];
//       this.setState({
//         username: lastGist.owner.login,
//         lastGistUrl: lastGist.html_url
//       });
//     }.bind(this));
//   }
 
//   componentWillUnmount() {
//     this.serverRequest.abort();
//   }
 
//   render() {
//     return (
//       <div>
//         {this.state.username} 用户最新的 Gist 共享地址：
//         <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
//       </div>
//     );
//   }
// }
 
// ReactDOM.render(
//   <UserGist source="https://api.github.com/users/octocat/gists" />,
//   document.getElementById('root')
// );


// // React表单与事件
// class HelloMessage extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {value: 'Hello Runoob!'};
//       this.handleChange = this.handleChange.bind(this);
//   }
 
//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }
//   render() {
//     var value = this.state.value;
//     return <div>
//             <input type="text" value={value} onChange={this.handleChange} /> 
//             <h4>{value}</h4>
//            </div>;
//   }
// }
// ReactDOM.render(
//   <HelloMessage />,
//   document.getElementById('root')
// );

// // 在子组件上使用表单：
// /**
//  * 在子组件上使用表单。 onChange 方法将触发 state 的更新并将更新的值传递到子组件的输入框的 value 
//  * 上来重新渲染界面。你需要在父组件通过创建事件句柄 (handleChange) ，并作为 prop (updateStateProp)
//  *  传递到你的子组件上。
// */
// class Content extends React.Component {
//   render() {
//     return  <div>
//             <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} /> 
//             <h4>{this.props.myDataProp}</h4>
//             </div>;
//   }
// }
// class HelloMessage extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {value: 'Hello Runoob!'};
//       this.handleChange = this.handleChange.bind(this);
//   }
 
//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }
//   render() {
//     var value = this.state.value;
//     return <div>
//             <Content myDataProp = {value} 
//               updateStateProp = {this.handleChange}></Content>
//            </div>;
//   }
// }
// ReactDOM.render(
//   <HelloMessage />,
//   document.getElementById('root')
// );


// // Select 下拉菜单
// /**
//  * 在 React 中，不使用 selected 属性，而在根 select 标签上用 value 属性来表示选中项。
//  */
//  class FlavorForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: 'coconut'};
 
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
 
//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }
 
//   handleSubmit(event) {
//     alert('Your favorite flavor is: ' + this.state.value);
//     event.preventDefault();
//   }
 
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           选择您最喜欢的网站
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="gg">Google</option>
//             <option value="rn">Runoob</option>
//             <option value="tb">Taobao</option>
//             <option value="fb">Facebook</option>
//           </select>
//         </label>
//         <input type="submit" value="提交" />
//       </form>
//     );
//   }
// }
 
// ReactDOM.render(
//   <FlavorForm />,
//   document.getElementById('root')
// );


// // 多个表单
// /**
//  * 当你有处理多个 input 元素时，你可以通过给每个元素添加一个 name 属性，来让处理函数根据
//  *  event.target.name 的值来选择做
// */
// class Reservation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 5
//     };
 
//     this.handleInputChange = this.handleInputChange.bind(this);
//   }
 
//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;
 
//     this.setState({
//       [name]: value
//     });
//   }
 
//   render() {
//     return (
//       <form>
//         <label>
//           是否离开:
//           <input
//             name="isGoing"
//             type="checkbox"
//             checked={this.state.isGoing}
//             onChange={this.handleInputChange} />
//         </label>
//         <br />
//         <label>
//           访客数:
//           <input
//             name="numberOfGuests"
//             type="number"
//             value={this.state.numberOfGuests}
//             onChange={this.handleInputChange} />
//         </label>
//       </form>
//     );
//   }
// }
// ReactDOM.render(
//   <Reservation />,
//   document.getElementById('root')
// );

// // React实例之通过onClick事件修改数据
// class HelloMessage extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {value: 'Hello Runoob!', booleanFlag: true};
//       this.handleChange = this.handleChange.bind(this);
//   }
  
//   handleChange(event) {
//     let textShow = !this.state.booleanFlag?"Hello Runoob!":"菜鸟教程";
//     this.setState({value: textShow})
//     console.log(!this.state.booleanFlag);
//     this.setState({booleanFlag: !this.state.booleanFlag})
//   }
//   render() {
//     var value = this.state.value;
//     return <div>
//             <button onClick={this.handleChange} value={!this.state.booleanFlag}>点我</button>
//             <h4>{value}</h4>
//            </div>;
//   }
// }
// ReactDOM.render(
//   <HelloMessage />,
//   document.getElementById('root')
// );


// // 子组件修改父组件的state的实例
// /**
//  * 当你需要从子组件中更新父组件的 state 时，你需要在父组件通过创建事件句柄 (handleChange) ，并作为
//  *  prop (updateStateProp) 传递到你的子组件上。实例如下：
// */
// class Content extends React.Component {
//   render() {
//     return  <div>
//               <button onClick = {this.props.updateStateProp}>点我</button>
//               <h4>{this.props.myDataProp}</h4>
//            </div>
//   }
// }
// class HelloMessage extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {value: 'Hello Runoob!'};
//       this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(event) {
//     this.setState({value: '菜鸟教程'})
//   }
//   render() {
//     var value = this.state.value;
//     return <div>
//             <Content myDataProp = {value} 
//               updateStateProp = {this.handleChange}></Content>
//            </div>;
//   }
// }
// ReactDOM.render(
//   <HelloMessage />,
//   document.getElementById('root')
// );


// // 父子组件都用表单
// class HelloMessageChild extends React.Component {
//   render(){
//     return <div>
//       <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} /> 
//       <h4>子组件显示：{this.props.myDataProp}</h4>
//       </div>;
//   }
// }
// class HelloMessage extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {value: '父组件',value1:"子组件"};
//       this.handleChange = this.handleChange.bind(this);
//       this.handleChange1 = this.handleChange1.bind(this);
//   }
 
//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }
//   handleChange1(event) {
//     this.setState({value1: event.target.value});
//   }
//   render() {
//     var value = this.state.value;
//     var value1 = this.state.value1;
//     return <div>
//             <table><tbody>
//             <tr>
//             <td>
//               <input type="text" value={value} onChange={this.handleChange} /> 
//               <h4>父组件显示：{value}</h4>
//             </td>
//             <td>
//               <HelloMessageChild myDataProp = {value1} updateStateProp = {this.handleChange1} />
//             </td>
//             </tr>
//             </tbody></table>
//            </div>;
//   }
// }
// ReactDOM.render(
//   <HelloMessage />,
//   document.getElementById('root')
// );


// React Refs
/**
 * React 支持一种非常特殊的属性 Ref ，你可以用来绑定到 render() 输出的任何组件上。
  这个特殊的属性允许你引用 render() 返回的相应的支撑实例（ backing instance ）。这样就可以确保在
  任何时间总是拿到正确的实例。
*/
class MyComponent extends React.Component {
  handleClick() {
    // 使用原生的 DOM API 获取焦点
    this.refs.myInput.focus();
  }
  render() {
    //  当组件插入到 DOM 后，ref 属性添加一个组件的引用于到 this.refs
    return (
      <div>
        <input type="text" ref="myInput" />
        <input
          type="button"
          value="点我输入框获取焦点"
          onClick={this.handleClick.bind(this)}
        />
      </div>
    );
  }
}
 
ReactDOM.render(
  <MyComponent />,
  document.getElementById('root')
);