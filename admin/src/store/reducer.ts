const isLogin = true;

const login = {
    type: 'login'
}

const logout = {
    type: 'logout'
}

const reducer = (state = isLogin, action: { type: string }) => {
    switch (action.type) {
        case 'login':
            return state = true;
        case 'logout':
            return state = false;
        default:
            return state;
    }
}

export default reducer