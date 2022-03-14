let username = ""

export const handleUsername = function(action, newUserName) {
  if (action === "set") {
    username = newUserName
  } else if (action === "get") {
    return username
  }
}