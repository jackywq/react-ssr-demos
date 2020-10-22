import React from 'react'

export default class Error extends React.Component {
    render() {
        // 自定义error页
        return (
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px'}}>
            当前页面不存在
        </div>
        )
    }
}