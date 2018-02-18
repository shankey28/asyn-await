const users = [{
    userid:1,
    username:'Shashi',
    userage:35
},
{
    userid:2,
    username:'Neha',
    userage:32
}];

const grades = [{
    userid:1,
    school:999,
    grade:87
},
{
    userid:2,
    school:101,
    grade:99
},
{
    userid:1,
    school:999,
    grade:98
}];


const getuser = (id)=>{
    return new Promise((resolve,reject)=>{
       const user = users.find((user) => user.userid===id);
       if(user)
       resolve(user);
       else
       reject(`UserId ${id} not found`);
    })
}

const getgrades = (school)=>{
    return new Promise((resolve,reject)=>{
        const grade = grades.filter((grade)=>grade.school===school)
        if(grade)
        resolve(grade);
        else
        reject(`Grades not found for School ${school}`);

    })
}

getgrades(999).then((grade)=>{
    console.log(grade);
}).catch((e)=>{
    console.log(e);
});

// getuser(3).then((user)=>{
//     console.log(user);
// }).catch((e)=>{
//     console.log(e);
// });