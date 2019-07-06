import {mount} from 'enzyme';
import TestDemo from '../src/component/TestDemo';

const sum = function (a, b) {
    return a + b;
};

//参数：1、测试描述；2、包裹测试样例的函数
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

//使用enzyme测试组件
test('TestDemo', () => {
    const wrapper = mount(<TestDemo/>);
    expect(wrapper.find('div').text()).toBe('test');
});