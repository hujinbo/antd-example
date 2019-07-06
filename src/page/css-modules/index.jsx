import myStyles from './styles.css';

export default () => {
    return (
        /*在umi中默认开启了CSS modules特性，所以class名需要通过变量属性引用
        * 像body、div 、a这样的标签不会被处理*/
        <div className={myStyles.hello}>Hello World</div>
    );
};