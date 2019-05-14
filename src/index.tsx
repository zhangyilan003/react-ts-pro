import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as styles from './index.scss'
import Test from '@components/Test'
// 测试冲突2
const render = () => {
    ReactDOM.render(
        <Test />,
        document.querySelector('#app')
    )
}
// 注释一
render()
