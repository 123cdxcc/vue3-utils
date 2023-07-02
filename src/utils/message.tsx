// 一个消息类
// 用于显示消息
// 提供两个按钮，一个是确定，一个是取消

import { createApp, type CSSProperties } from 'vue';
const boxStyle = {
    width: '300px',
    margin: '0 auto',
    background: '#fff',
    borderRadius: '5px',
    padding: '10px',
}
const titleStyle: CSSProperties = {
    textAlign: 'center',
    margin: '10px 0',
}
const btnGroupStyle = {
    display: 'flex',
    justifyContent: 'space-around',
}
const btnStyle = {
    width: '100px',
    height: '30px',
    background: '#27b36c',
    borderRadius: '5px',
    border: 'none',
}

const MessageBox = {
    props: {
        message: {
            type: String,
            default: ''
        }
    },
    render(ctx: any) {
        const { $props, $emit } = ctx;
        return (
            <div style={boxStyle}>
                <h2 style={titleStyle}>{$props.message}</h2>
                <div style={btnGroupStyle}>
                <button style={btnStyle} onClick={()=>$emit('confirm')}>确定</button>
                <button style={btnStyle} onClick={()=>$emit('hide')}>取消</button>
                </div>
            </div>
        )
    }
}

export default function message(message: string, confirm: ()=>void, cancel: ()=>void) {
    function onConfirm() {
        confirm();
    }
    function onHide() {
        app.unmount();
        document.body.removeChild(container);
        cancel();
    }
    let container = document.createElement('div');
    document.body.appendChild(container);
    let app = createApp(MessageBox, {message, onConfirm, onHide})
    app.mount(container);
}