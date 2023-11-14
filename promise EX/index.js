comments = [
    {
        id: 1,
        id_User: 1,
        content: 'This is a comment 1'
    },
    {
        id: 2,
        id_User: 1,
        content: 'This is a comment 2'
    },
    {
        id: 3,
        id_User: 1,
        content: 'This is a comment 3'
    }
]

Users = [
    {
        id: 1,
        name: 'John - user 1',
    },
    {
        id: 2,
        name: 'Bob - user 2',
    }
]

//Lấy comment
getComments = () => {
    return new Promise(
        (resolve)=>{
            resolve(comments);
        }
    )
}

getUserById = (userIds) =>{
    return new Promise(
        (resolve)=>{
            let result =  Users.filter((user) => userIds.includes(user.id))
            resolve(result);
        }
    )
}

getComments()
    .then(
        (comments)=>{
            let userId = comments.map((comment)=>{
                return comment.id_User
            })
            return getUserById(userId)
                .then(
                    (user)=>{
                        return Promise.resolve(
                            {
                                users: user,
                                comments: comments,
                            }
                        )
                    }
                )
        }
        
    )
    .then(
        (data)=>{
            console.log(data);
            html='';
            data.comments.forEach((comment) => {
                 var user = data.users.find((user) => {return user.id === comment.id_User});
                if(user){
                    html += `<li> ${user.name} has commented ${comment.content} </li>`;
                }
                //html += `<li> ${user.name} has commented ${comment.content} </li>`
            });
            console.log(html);
        }
    )
