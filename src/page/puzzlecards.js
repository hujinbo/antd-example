import React, {Component} from 'react';
import {Card, Button} from 'antd';
import {connect} from 'dva';

const namespace = 'puzzlecards';

//把 dva model 中的 state 通过组件的 props 注入给组件
//传入的 state 是个 "完全体"，包含所有 namespace 下的 state
const mapStateToProps = (state) => {
    const cardList = state[namespace].data;
    return {
        cardList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDidMount: () => {
            dispatch({
                type: `${namespace}/queryInitCards`,
            });
        },
        onClickAdd: (newCard) => {
            const action = {//action是reducers及effects的触发器
                type: `${namespace}/addNewCard`,
                payload: newCard,
            };
            dispatch(action);//dispatch 派发了一个 action
        },
    };
};

//connect作用：1.获取model中的数据；2.驱动model改变的方法
@connect(mapStateToProps, mapDispatchToProps)
export default class PuzzleCardsPage extends Component {

    componentDidMount() {
        this.props.onDidMount();
    }

    render() {
        return (
            <div>
                {
                    this.props.cardList.map(card => {
                        return (
                            <Card key={card.id}>
                                <div>Q: {card.setup}</div>
                                <div>
                                    <strong>A: {card.punchline}</strong>
                                </div>
                            </Card>
                        );
                    })
                }
                <div>
                    <Button onClick={() => this.props.onClickAdd({
                        setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                        punchline: 'here we use dva',
                    })}> 添加卡片 </Button>
                </div>
            </div>
        );
    }
}
