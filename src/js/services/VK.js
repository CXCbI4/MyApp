import VKConnectOld from "@vkontakte/vk-connect";
import VKConnect from "@vkontakte/vkui-connect-promise";

import {store} from "../../index";

import {setColorScheme, setAccessToken} from "../store/vk/actions";

const APP_ID = 7232334;
const API_VERSION = '5.52';

export const initApp = () => (dispatch) => {
    const VKConnectOldCallback = (e) => {
        if (e.detail.type === 'VKWebAppUpdateConfig') {
            VKConnectOld.unsubscribe(VKConnectOldCallback);

            dispatch(setColorScheme(e.detail.data.scheme));
        }
    };

    VKConnectOld.subscribe(VKConnectOldCallback);
    VKConnect.send('VKWebAppInit', {});
};

export const getAuthToken = (scope) => (dispatch) => {
    VKConnect.send("VKWebAppGetAuthToken", {
        "app_id": APP_ID,
        "scope": scope.join(',')
    }).then(data => {
        dispatch(setAccessToken(data.data.access_token));
    }).catch(() => {    
        dispatch(setAccessToken(null));
    });
};

export const closeApp = () => {
    VKConnect.send("VKWebAppClose", {"status": "success"});
};

export const swipeBackOn = () => {
    VKConnect.send("VKWebAppEnableSwipeBack", {});
};

export const swipeBackOff = () => {
    VKConnect.send("VKWebAppDisableSwipeBack", {});
};

export const friendsGet = () => {

    return APICall('friends.search', {
        "fields": "first_name,last_name,photo_100",
        "count": "1000"
    });
};

export const APICall = (method, params) => {
    params['access_token'] = store.getState().vkui.accessToken;

    params['v'] = params['v'] === undefined ? API_VERSION : params['v'];

    return VKConnect.send("VKWebAppCallAPIMethod", {
        "method": method,
        "params": params
    }).then(data => {
        return data.data.response;

    }).catch(error => {
        return error;
    });
};