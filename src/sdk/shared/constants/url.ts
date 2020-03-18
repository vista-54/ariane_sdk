
const api = 'https://data.hptariane.com/api/';

export const APP_URL = {
    auth: {
        login: api + 'login',
        register: api + 'register',
        request_token: api + 'token/mail',
        verify: api + 'token/verify',
        settings_update: api + 'settings/update',
        reactivate: api + 'reactivate'
    },
    homepage: {
        get: api + 'index'
    },
    user: {
        get: api + 'info'
    },
    datascope: {
        retailer: api + 'retailer',
        channel: api + 'channel',
        category: api + 'category',
        'sub-category': api + 'sub-category',
        brand: api + 'brand',
        product: api + 'product',
        store: api + 'store',
        update: api + 'scope/update'
    },
    settings: {
        get: api + 'settings'
    },
    store_visit: {
        get: api + 'store-visit',
        channel: api + 'store-visit/channel',
        store: api + 'store-visit/store',
        update: api + 'store-visit/update',
        alert_main: api + 'store-visit/alerts',
        report: api + 'store-visit/report',
        send_report: api + 'store-visit/report/send'
    },
    to_do: {
        get: api + 'to-do/index',
        list: api + 'to-do/list',
        view: api + 'to-do/view',
        update: api + 'to-do/update',
        delete: api + 'to-do/delete',
        create: api + 'to-do/create'
    },
    sdk: {
        login: api + 'login/third-party'
    }
};
