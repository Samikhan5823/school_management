const initialstate = {
  user: [
    { userID: '1', email: 'Fawad@bellmedex.com', password: 'Abc@1234' },
    { userID: '2', email: 'hassan@456', password: '456' },
    { userID: '3', email: 'moiz@789', password: '789' },
  ],
  isLoggedin: false,
  loggedInUser: {},
  loginFailed: false,
}

export default function login(state = initialstate, action) {
  if (action.type === 'LOGIN_ACTION') {
    return loginUser(action.payload)
  }else if (action.type === 'LOGOUT_ACTION') {
    return {...state,isLoggedin:false}
  }
  return state
}

const loginUser = (userInfo) => {
  const matchedUser = initialstate.user.find((el) => {
    return el.email === userInfo.email && el.password === userInfo.password
  })
  if (matchedUser) {
    return { ...initialstate, isLoggedin: true, loggedInUser: matchedUser }
  } else {
    return { ...initialstate, loginFailed: true }
  }
}
