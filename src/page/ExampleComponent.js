import React, {PureComponent} from 'react';

//PureComponent默认实现了一个版本的shouldComponentUpdate 会进行state和props的比较
class ExampleComponent extends PureComponent {

    //初始化状态和操作，进行函数绑定
    constructor(props) {
        super(props);
        this.state = {
            color: '#fff'
        };
    }

    //声明函数时使用箭头匿名函数，箭头函数会自动设置this为当前类
    handleClick = () => {
        console.log('handleClick', this);
    };

    //相当于java接口，必须实现
    render() {
        return (
            <button onClick={this.handleClick}>click</button>
        )
    }

    //进行DOM操作，进行异步调用初始化页面
    componentDidMount() {
        //推荐在这个函数中发送异步请求，在回调函数中调用setState()设置state，等数据到达后触发重新渲染
        //尽量不要在这个函数中直接调用setState()设置状态，这会触发一次额外的重新渲染
    }

    //更新完成后被立即调用，需要判断属性是否发生变化再发起网络请求等操作
    componentDidUpdate(prevProps, prevState) {

    }

    //清除组件定时器，socket网络请求或者相关订阅等
    componentWillUnmount() {

    }

}

export default ExampleComponent;
