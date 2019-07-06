import {FormattedMessage, formatMessage} from 'umi/locale';

export default () => {
    console.log(formatMessage({id: 'helloworld'}));
    return <div><FormattedMessage id="helloworld"/></div>;
}