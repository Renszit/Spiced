const { getAlbumNames } = require("./albums");
const spotify = require("./spotify");

jest.mock("./spotify");

test("album names are in alphabetical order", () => {
    spotify.search.mockResolvedValue({
        albums: {
            items: [
                { name: "all" },{ name: "all my best" },{ name: "all my best friends are metalheads"},
            ],
        },
    });
    return getAlbumNames("all my best").then((albumNames) => {
        expect(albumNames).toEqual(albumNames.slice().sort());
    });
});
