let userName = "";

export const getUserName = function (action, newUser) {
    if (action === "set") {
        userName = newUser;
    } else if (action === "get") {
        return userName;
    }
};