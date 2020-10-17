const getTodos = (resource, callback) => {

    return new Promise((resolve, reject)=>{
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', ()=> {
            // console.log(request, request.readyState);
            if(request.readyState===4 && request.status===200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if(request.readyState === 4) {
                reject('error');
            }
        })
    
        request.open('GET', resource);
        // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
        request.send();
    });
};

getTodos('todos/luigi.json').then(data=>{
    console.log('Promise resolved:', data);
}).catch((err)=>{
    console.log('Promise rejected:', err)
})

