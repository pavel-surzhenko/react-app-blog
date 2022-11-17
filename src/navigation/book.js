export const book = Object.freeze({
    login:        '/login',
    signUp:       '/sign-up',
    feed:         '/feed',
    profile:      '/profile',
    newPassword:  '/profile/new-password',
    postComments: (postHash) => `/feed/${postHash}/comments`,
});
