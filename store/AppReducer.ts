// eslint-disable-next-line import/no-anonymous-default-export
export default (state: TinitialValue, action: Taction) => {
  switch (action.type) {
    case 'SWITCH_THEME':
      return { ...state, theme: !state.theme };
    case 'CHANGE_NAME':
      return { ...state, username: action.payload };
    case 'INIT_STORE':
      return action.payload;
    case 'LOGIN':
      return { ...state, isLogin: true };
    default:
      return state;
  }
};
