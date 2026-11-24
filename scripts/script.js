console.log("Initializing script.js");

async function songDisplay() {
    try {
        // Fetch the list of song folders
        let songFile = await fetch("/songs.json");

        if (!songFile.ok) {
            throw new Error("Unable to load songs.json: " + songFile.status);
        }

        let folders = await songFile.json();

        // Convert folder names into URLs
        return folders.map(folder => `/songs/${folder}`);

    } catch (error) {
        console.error("Error fetching song folders:", error);
        return [];
    }
}

async function main() {

    let albums = await songDisplay();

    console.log("Albums:", albums);

    let playlistAlbums = document.getElementsByClassName("folderList")[0];

    if (!playlistAlbums) {
        console.error("folderList element not found!");
        return;
    }

    for (const album of albums) {

        try {

            // Fetch JSON file from each album folder
            let response = await fetch(`${album}/info.json`);

            if (!response.ok) {
                console.error("Unable to load:", album);
                continue;
            }

            let data = await response.json();

            // Extract title and author
            let title = data.title;
            let author = data.Author;

            playlistAlbums.innerHTML += `
                <li>
                    <button class="folder-list library-song-btn hovering-effect flex-hor">

                        <div class="flex-ver g2">
                            <span class="song-title">${title}</span>
                            <span class="song-subtitle">${author}</span>
                        </div>

                        <div class="library-play opacity-transition">
                            <img src="images/playCircle.svg" alt="Play" class="icon">
                        </div>

                    </button>
                </li>
            `;

        } catch (error) {
            console.error("Error loading album:", album, error);
        }
    }
}

main();