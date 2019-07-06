import React, {PureComponent} from 'react';
import {Button} from 'antd';
import {FormattedMessage, setLocale, getLocale} from 'umi/locale';

export default class GlobalHeader extends PureComponent {

    changLang() {
        const locale = getLocale();
        if (!locale || locale === 'zh-CN') {
            setLocale('en-US');
        } else {
            //setLocale把语言信息保存到localStorage中
            setLocale('zh-CN');
        }
    }

    render() {
        return (
            <Button size="small" onClick={() => {
                this.changLang()
            }}>
                <FormattedMessage id="lang"/>
            </Button>
        )
    }

}
