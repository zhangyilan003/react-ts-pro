import * as React from 'react'
import { observable, action, runInAction } from 'mobx'
import {message, notification } from 'antd'

export class storeExt {
    // readonly api = api
    readonly $message = message
    readonly $notification = notification

    @observable
    loading: boolean = false

}
