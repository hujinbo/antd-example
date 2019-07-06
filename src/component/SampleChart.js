import React from 'react';
import G2 from '@antv/g2';

class SampleChart extends React.Component {
    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
    }

    componentDidMount() {
        // G2 初始化图形代码
        this.chart = new G2.Chart({
            // this.containerRef.current 即为引用
            container: this.containerRef.current,
            width: 450,
            height: 300
        });

        this.refreshChart();
    }

    //组件更新时，更新图表
    /*componentDidUpdate() {
        this.refreshChart();
    }*/

    //data没有变化我们图表不需要重新绘制
    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
            this.refreshChart();
        }
    }

    //组件卸载时，销毁图表
    componentWillUnmount() {
        if (this.chart) {
            this.chart.destroy();
        }
    }

    refreshChart = () => {
        // 接收 data 属性作为数据源
        this.chart.source(this.props.data);
        // 此处为硬编码，配置源自 G2 官方示例： https://github.com/antvis/g2
        // 实际开发中需要封装，推荐直接使用 BizCharts。
        this.chart.interval().position('genre*sold').color('genre');
        this.chart.render();
    };

    render() {
        return (
            /*ref可以获取经过render后的真实节点的引用*/
            <div ref={this.containerRef}/>
        );
    }
}

export default SampleChart;