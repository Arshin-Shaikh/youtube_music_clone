console.log("initializing script.js");

async function songDisplay() {
    try {
        let songFile = await fetch('http://127.0.0.1:5500/songs/');
        let response = await songFile.text();
        let div = document.createElement("div");
        div.innerHTML = response;
        let songCategory = div.getElementsByTagName("a");
        let folders = [];
        for (let index = 0; index < songCategory.length; index++) {
            const element = songCategory[index];
            if (element.href.includes("/songs/")) {
                folders.push(element.href);
            }

        }
        return folders;

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

async function main() {
    let albums = await songDisplay();
    console.log(albums);
    let playlistAlbums = document.getElementsByClassName("folderList")[0];
    for (const album of albums) {
        // Fetch JSON file from each album folder
        let response = await fetch(`${album}/info.json`);
        let data = await response.json();

        // Extract title and author
        let title = data.title;
        let Author = data.author;
        playlistAlbums.innerHTML = playlistAlbums.innerHTML + `<li>
                                    <button class=" folder-list library-song-btn hovering-effect flex-hor">

                                        <div class="flex-ver g2">
                                             <span class="song-title">${title}</span>
                                             <span class="song-subtitle">${data.Author}</span>
                                        </div>

                                        <div class="library-play opacity-transition">
                                            <img src="images/playCircle.svg" alt="Play" class="icon">
                                        </div>

                                    </button>
                                </li>`
    }
}

main();
