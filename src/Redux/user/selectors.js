// два способа создания селекторов
export function getProfileName(state) {
    return state.user.name;
}

export const selectUsersList = (state) => state.user.users;
export const selectAuth = (state) => state.user.authed;
export const selectCurrentUser = (state) => state.user.currentUser;