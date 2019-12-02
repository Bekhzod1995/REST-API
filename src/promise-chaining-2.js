require('./db/mongoose');
const Task = require('./models/task');

// Task.findByIdAndRemove('5dd27abd361b4d05983f5725').then((user) => {
//     console.log(user);
//     return Task.countDocuments({ completed: false });
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

const deleteTaskAndCount = async (id) => {
    const deletedTask = await Task.findByIdAndDelete(id);
    const numberOfIncompleteTasks = await Task.countDocuments({ completed: false });
    return numberOfIncompleteTasks;
};

deleteTaskAndCount('5dd2cefd0921510e7091590e').then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
});