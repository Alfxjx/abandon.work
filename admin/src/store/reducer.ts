const isLogin = false;

const login = {
    type: 'login'
}

const logout = {
    type: 'logout'
}

const reducer = (state = isLogin, action: { type: string }) => {
    switch (action.type) {
        case login.type:
            return state = true;
        case logout.type:
            return state = false;
        default:
            return state;
    }
}

export default reducer