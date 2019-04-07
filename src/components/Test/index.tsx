import * as React from 'react'
import { Button } from 'antd'

interface IP {
    isCollapsed?:true
}
class Test extends React.Component<IP> {
    render() {
        return (
            <div>
                <Button type="primary">按钮</Button>
            </div>
        )
    }
}
 export default Test
