/* 
Data names
Logo = strTeamLogo
Description = strDescriptionEN
Year formed = intFormedYear
Stadium photo = strStadiumThumb
Jersey = strTeamJersey

*/





// Function that sends GET request
// Returns an array of all 30 mlb teams
// async function getSportsData() {

//     try {
//        const dataPointOne = await axios.get(`https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=MLB`);
//        console.log(`Get request was successful`);
//        console.log(dataPointOne.data.teams);

//     } catch(err){
//         console.log(`Get request was not successful`);
//         console.log(err);
//     }
// }
// getSportsData();

const div = document.querySelector(`div`);
const form = document.querySelector(`form`);
const textInput = document.querySelector(`input[type='text']`);
const resetBtn = document.querySelector(`div>#resetBtn`)


async function request(index) {

    try {
        const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=MLB`);
        console.log(response.data);
        console.log(response.data.teams);
        console.log(response.data.teams[index - 1]);
        console.log(response.data.teams[index - 1].strTeam);
        console.log(response.data.teams[index - 1].strTeamLogo);
        console.log(response.data.teams[index - 1].strDescriptionEN);
        console.log(response.data.teams[index - 1].intFormedYear);
        console.log(response.data.teams[index - 1].strStadiumThumb);
        console.log(response.data.teams[index - 1].strTeamJersey);

        // Putting selected team name on the page
        const rosterDiv = document.querySelector(`#roster`);
        const teamName = document.createElement(`h2`)
        teamName.innerText = response.data.teams[index - 1].strTeam;
        rosterDiv.insertAdjacentElement("beforebegin", teamName)


        // Putting team manager name on the page
        const managerH2 = document.querySelector(`section#teamInfo>#description>h4#manager`)
        const manager = document.createElement(`h3`)
        manager.innerText = response.data.teams[index - 1].strManager;
        managerH2.append(manager)

        // Putting home field name on the page 
        const fieldH2 = document.querySelector(`section#teamInfo>#description>h4#homeField`)
        const field = document.createElement(`h3`)
        field.innerText = response.data.teams[index-1].strStadium 
        fieldH2.append(field)
        // Putting team logo on the page
        const logoDiv = document.querySelector(`section#teamInfo>#logo`);
        const logo = document.createElement(`img`)
        logo.src = response.data.teams[index - 1].strTeamLogo;
        logoDiv.append(logo)

        // Putting stadium photo on page
        const stadiumPhoto = document.querySelector(`section#teamInfo>#stadiumPic`);
        const stadium = document.createElement(`img`);
        stadium.src = response.data.teams[index - 1].strStadiumThumb
        stadiumPhoto.append(stadium);

        // Putting formed year on page
        const yearFormed = document.querySelector(`section#teamInfo>#year`);
        const year = document.createElement(`h3`);
        year.innerText = response.data.teams[index - 1].intFormedYear;
        yearFormed.append(year);

        // Putting uniform on page
        const jerseyDiv = document.querySelector(`section#teamInfo>#jersey`)
        const jersey = document.createElement(`img`)
        jersey.src = response.data.teams[index - 1].strTeamJersey;
        jerseyDiv.append(jersey)

        // Selecting social media div
        const socialMediaDiv = document.querySelector(`section#teamInfo>#socialMedia`)
        // Putting team twitter on the page
        const twitter = document.querySelector(`section#teamInfo>#socialMedia>i#twitter`);
        const twitterLink = document.createElement(`a`);
        twitterLink.href = response.data.teams[index - 1].strTwitter;
        twitter.append(twitterLink)


    } catch (err) {
        console.log(err);
    }
}

form.addEventListener(`submit`, chicken => {
    chicken.preventDefault();
    request(textInput.value);
});

// Function that reloads page
function refreshPage() {
    window.location.reload();
} 