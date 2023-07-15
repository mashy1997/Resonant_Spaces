//list of moodboards we can use for seeds the database
use moodboards;
db.dropDatabase();

db.moodboards.insertMany([{
    name: "Pink Kitchen",
    savedArtworks: ["url", "yellow sunflowers", "vincent van gogh"]
},
{
    name: "Green Bedroom",
    savedArtworks: ["url", "mona lisa", "leonard da vinci"] 
}
])