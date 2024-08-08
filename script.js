

// const gitApi = ()=>{
//     fetch("https://api.github.com/users/hussainshamim16")
// .then((set)=>{
//     return set ,json()
// })
// .then((solve)=>{
//     console.log("solve",solve)
// })
// .catch((error)=>{
//     console.log("error",error)
// })
// }

// fetch("https://api.github.com/users/hussainshamim16")
// .then(res=>res.json())
// .then(json=>console.log(json))


const Myapi = () => {
    try {
        fetch("https://api.github.com/users/hussainshamim16")

            .then((set) => {
                return set.json()
            })
            .then((solve) => {
                // console.log("solve", solve)
                calliingFnc(solve)
            })
    } catch (error) {

        console.error("eroor", error.message)

    }

}

Myapi()

let calliingFnc = (pera)=>{
    // console.log(pera)
    // for (const i of pera) {
    //     console.log(i)
    // }

    const mother = document.getElementById('mother')
    mother.innerHTML = ` <img src="https://avatars.githubusercontent.com/u/142653978?v=4" style="border : 2px solid red;width:200px;" class="rounded mx-auto d-block"
      alt="My Image" class="mb-5">
      <h2 class="text-center mb-3 mt-3">${pera.name}<span class="badge ms-2 bg-danger">New</span></h2>
      <p>${pera.bio}</p>
      <span class="me-4">followers ${pera.followers}</span> <span>following ${pera.following}</span> <br>
      <h5 class="mt-3 bg-danger p-2">public repository ${pera.
        public_repos}</h5>
      <ul style="list-style: number;text-align: left;margin-top: 20px;">
        <li class="mb-4">Company <span class="ms-5 p-1"> ${pera.company}</span></li>
        <li class="mb-4">Location <span class="ms-5 p-1"> ${pera.location}</span></li>
      </ul>
      <button class="btn btn-danger mt-3 mb-5" onclick="Git()">Github Account</button>`
}


const Git  = ()=>{
    console.log("red")
    window.open('https://github.com/hussainshamim16',width='200px' ,height="300px")
}