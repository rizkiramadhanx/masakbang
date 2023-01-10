type Taction = {
  type: string;
  payload?: any;
};

type TinitialValue = {
  theme: boolean;
  username: string;
  isLogin: boolean;
};

type TactionContext =
  | { type: 'SWITCH_THEME' }
  | { type: 'CHANGE_NAME'; payload: string }
  | { type: 'INIT_STORE'; payload: object }
  | { type: 'LOGIN' };

type TinitialValue = {
  theme: boolean;
  username: string;
};
