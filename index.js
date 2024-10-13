let library = [
    {
        title: "Every Day is For the Thief",
        author: "Teju Cole",
        isAvailable: true,
    },
    {
        title: "Sweet Sixteen",
        author: "Bolaji Abdullai",
        isAvailable: true,
    },
    {
        title: "Can anything good come out of history",
        author: "Obari Ikime",
        isAvailable: true,
    },
    {
        title: "Allow me to introduce myself",
        author: "Onyi Nwabineli",
        isAvailable: true,
    },
    {
        title: "Butter honey big head",
        author: "Francesca Ekwuyasi",
        isAvailable: true,
    },
    {
        title: "Butter honey big head",
        author: "Francesca Ekwuyasi",
        isAvailable: true,
    },
    {
        title: "Purple hibicus",
        author: "Chimamanda Ngozi",
        isAvailable: true,
    },
    {
        title: "Americanah",
        author: "Chimamanda Ngozi",
        isAvailable: true,
    },
    {
        title: ">A spell of Good things",
        author: "Ayobami Adebayo",
        isAvailable: true,
    },
    {
        title: "Death of orji",
        author: "Chinua Achebe",
        isAvailable: true,
    },
    {
        title: "The Death of Vivek Oji",
        author: "Akwaeke Emezi",
        isAvailable: false,
    },
    {
        title: "The Joys of a Motherhood",
        author: "Buchi Emecheta",
        isAvailable: true,
    },
    {
        title: "There was a Country",
        author: "Chinua Achebe",
        isAvailable: true,
    },
    {
        title: "Africa Theatre",
        author: "Woke Soyinka",
        isAvailable: true,
    },
    {
        title: "Drama Queen",
        author: "Sefi Affa",
        isAvailable: true,
    },
    {
        title: "Stay with me",
        author: "Ayobami Adebaye",
        isAvailable: true,
    },
    {
        title: "Easy motion tourist",
        author: "Leye Adenle",
        isAvailable: true,
    },
];

document.getElementById('search-book-btn').addEventListener('click', ()=>{
    let searchInput = document.getElementById('search-book');
    let bookFound = searchInput.value.trim();
    let bookResult = library.find(book => book.title.toUpperCase() === bookFound.toUpperCase());
    if (bookResult) {
        alert(`${bookFound} is available`)
    }else{
        alert(`Sorry ${bookFound} is not in our library`)
    }
    
    
})