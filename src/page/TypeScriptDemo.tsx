import React from 'react';

//React.SFC代表无状态组件
const Hello: React.SFC<{ name: string }> = ({name}) => (
    <div>Hello,{name}</div>
);

//通过 <> 的第一个参数来指定 props 的类型。通过第二个参数来指定 state 的类型
class Message extends React.Component<{ message: string; }, { count: number; }> {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    public increment = () => {
        const {count} = this.state;
        this.setState({
            count: count + 1
        });
    };

    public render() {
        return (
            <div onClick={this.increment}>
                <Hello name={'bobo'}/>
                {this.props.message}
                {this.state.count}
            </div>
        );
    }

}

const TypeScriptDemo = () => <Message message="点击"/>;

export default TypeScriptDemo;