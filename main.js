const dataArray = [
    {
        userId: 1,
        userName: 'სახელი 1',
        userLastName: 'გვარი 1',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 20,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 2,
        userName: 'სახელი 2',
        userLastName: 'გვარი 2',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 30,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 3,
        userName: 'სახელი 3',
        userLastName: 'გვარი 3',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 35,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 4,
        userName: 'სახელი 4',
        userLastName: 'გვარი 4',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 29,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 5,
        userName: 'სახელი 5',
        userLastName: 'გვარი 5',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 49,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 6,
        userName: 'სახელი 6',
        userLastName: 'გვარი 6',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 31,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 7,
        userName: 'სახელი 7',
        userLastName: 'გვარი 7',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 31,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
]

let generateCards = (person) => {
        return `
            <div class="card">
                <div class="card-header">
                    <img src="${person.userImage}" alt="user image">
                </div>
                <h2 class="card-first-name">${person.userName}</h2>
                <h3 class="card-last-name">${person.userLastName}</h3>
                <h4 class="card-age">${person.userAge}</h4>
                <p class="card-address">${person.userAddresses}</p>
                <h2 class="card-id">${person.userId}</h2>
            </div>
        `
}
let displayCards = () => {
    const root = document.querySelector('.container');
    dataArray.forEach(element => {
        root.innerHTML += generateCards(element);
        
    });
}
let popUp = () => {
    let cards = document.querySelectorAll('.card')
    let popup = document.querySelector('.popup-wrapper')
    cards.forEach(e => {
        popup.addEventListener('click', () => {
            popup.classList.remove('active');
        })
        e.addEventListener('click', () => {
            popup.classList.add('active');
        })
    })
}
displayCards()
popUp()