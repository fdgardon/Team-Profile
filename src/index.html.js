function generateHtmlFile(array){
    var cards = ``
for (i=0; i< array.length; i++){
    if (array[i].getRole()== 'Manager'){
        cards+=`
        <div class="card m-5 shadow p-0" style="width:300px">
            <div class="card-header bg-light text-black">
                <h3>${array[i].getName()}</h3>
                <h4>
                    <i class="fas fa-mug-hot pr-3"></i>${array[i].getRole()}
                </h4>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group">
                    <li class="list-group-item">
                        <span class="font-weight-bold"><span class="font-weight-bold">ID:</span>${array[i].getId()}
                    </li>
                    <li class="list-group-item">
                        <span class="font-weight-bold">Email:</span><a
                            href="mailto:${array[i].getEmail()}">${array[i].getEmail()}</a>
                    </li>
                    <li class="list-group-item">
                        <span class="font-weight-bold">Office number:</span> ${array[i].getOfficeNumber()}
                    </li>
                </ul>
            </div>
        </div>`

    } else if (array[i].getRole()== 'Engineer'){
        cards+= ` <div class="card m-5 shadow p-0" style="width:300px">
        <div class="card-header bg-light text-black">
            <h3>${array[i].getName()}</h3>
            <h4>
                <i class="fas fa-glasses pr-3"></i>${array[i].getRole()}
            </h4>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group">
                <li class="list-group-item">
                    <span class="font-weight-bold">ID:</span>${array[i].getId()}
                </li>
                <li class="list-group-item">
                    <span class="font-weight-bold">Email:</span><a
                        href="mailto:${array[i].getEmail()}">${array[i].getEmail()}</a>
                </li>
                <li class="list-group-item">
                    <span class="font-weight-bold">GitHub:</span><a href="https://github.com/${array[i].getGithub()}"
                        target="_blank" rel="noopener noreferrer">${array[i].getGithub()}"</a>
                </li>
            </ul>
        </div>
    </div>`
    } else if (array[i].getRole()== 'Intern'){
        cards+= `<div class="card m-5 shadow p-0" style="width:300px">
        <div class="card-header bg-light text-black">
            <h3>${array[i].getName()}</h3>
            <h4>
                <i class="fas fa-user-graduate pr-3"></i>${array[i].getRole()}
            </h4>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group">
                <li class="list-group-item">
                    <span class="font-weight-bold">ID:</span> 458
                </li>
                <li class="list-group-item">
                    <span class="font-weight-bold">Email:</span><a
                        href="mailto:${array[i].getEmail()}">${array[i].getEmail()}/a>
                </li>
                <li class="list-group-item">
                    <span class="font-weight-bold">School:</span>${array[i].getSchool()}"
                </li>
            </ul>
        </div>
    </div>`
    }
}



    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    </head>
    
    <body>
        <header>
            <div class="text-center">
                <nav class="navabar bg-light text-black text-center pt-3 pb-5">
                    <div>
                        <h1>My Team</h1>
                    </div>
                </nav>
            </div>
        </header>
        <main>
            <div class="container">
                <div class="row d-flex justify-content-center align-items-center">
             
    ${cards}
                
                </div>
            </div>
        </main>
    </body>
    
    </html>`
}
module.exports = generateHtmlFile