const users=[];

function userJoin(id,username,room){
    const user={id,username,room};

    users.push(user)

    return user
}

// get current user
function getCurrentUser(id) {
    return users.find(user=>user.id===id)


}
// user leaves a chat
function userleave(id){
    const index=users.findIndex(user=>user.id===id)
    if (index!=-1){
        return users.splice(index,1)[0];
    }
}
// GET ROOM USERS
function getRoomUsers(room){
    return users.filter(user=>user.room===room)
}

module.exports={
    userJoin,
    getCurrentUser,
    userleave,
    getRoomUsers
}