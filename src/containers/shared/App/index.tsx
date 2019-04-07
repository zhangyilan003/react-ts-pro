import * as React from 'react'
import { hot } from 'react-hot-loader'
import Loadable from 'react-loadable'
import { LocaleProvider } from 'antd'

import zhCN from 'antd/lib/locale-provider/zh_CN'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import PageLoading from '@components/PageLoading'

const Test = Loadable({
    loader: () => import('@components/Test'),
    loading: PageLoading
})
