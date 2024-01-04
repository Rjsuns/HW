let url = new URL(location.href);
let id = url.searchParams.get('id')

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(value => {
        for (const user in value) {
            let userDiv = document.createElement('div');
            if (typeof value[user] !== 'object') {
                userDiv.innerText = `${user} - ${value[user]} `;
            } else {
                userDiv.innerText = `${user} :`;

                let userList = document.createElement('ul');
                for (const key in value[user]) {
                    let userListItem = document.createElement('li');
                    if (typeof value[user][key] !== 'object') {
                        userListItem.innerText = `${key} - ${value[user][key]}`;
                    } else {
                        userListItem.innerText = `${key} :`;

                        let innerList = document.createElement('ul');
                        for (const element in value[user][key]) {
                            let innerListItem = document.createElement('li');
                            if (typeof value[user][key][element] !== 'object') {
                                innerListItem.innerText = `${element} - ${value[user][key][element]}:`;
                            }
                            innerList.append(innerListItem);
                        }
                        userListItem.append(innerList);
                    }
                    userList.append(userListItem);
                }
                userDiv.append(userList);
            }
            document.body.append(userDiv);
        }
    });
