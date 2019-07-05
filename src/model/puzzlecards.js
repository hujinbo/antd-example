import request from '../util/request';

const delay = (millisecond) => {
    return new Promise((resolve) => {
        setTimeout(resolve, millisecond);
    });
};

export default {
    namespace: 'puzzlecards',//命名空间，唯一标识
    state: {//状态的初始值
        data: [],
        counter: 100,
    },
    effects: { // 中间件，action被dispatch后，会先到effects，生成新的action发送出去
        //参数1：action  参数2：call第一个参数是一个函数，要求函数返回Promise，之后的参数是该函数调用时的入参
        * queryInitCards(_, sagaEffects) {
            const {call, put} = sagaEffects;
            const endPointURI = '/dev/random_joke';

            //yield call调用阻塞，返回Promise的解析值，然后继续执行
            const puzzle = yield call(request, endPointURI);
            //put和yield配合使用效果和dispatch一样，用来派发一个action，type无需指定namespace
            yield put({type: 'addNewCard', payload: puzzle});

            yield call(delay, 1000);

            const puzzle2 = yield call(request, endPointURI);
            yield put({type: 'addNewCard', payload: puzzle2});
        }
    },
    reducers: {//处理同步操作 纯函数，响应action并修改state，返回一个新的state（返回值必须是一个新构造对象）
        addNewCard(state, {payload: newCard}) {//通过action.type匹配
            const nextCounter = state.counter + 1;
            const newCardWithId = {...newCard, id: nextCounter};
            const nextData = state.data.concat(newCardWithId);
            return {
                data: nextData,
                counter: nextCounter,
            };
        }
    },
};