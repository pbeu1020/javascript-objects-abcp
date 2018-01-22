var playlist={'Slowdive': 'Alison'};

function updatePlaylist(playlist, artistName, songTitle) {
  artistName;
  return playlist;
}

/*
describe('updatePlaylist(playlist, artistName, songTitle)', () => {
    before(() => {
      playlist['Slowdive'] = 'Alison'
      playlist['My Bloody Valentine'] = 'Sometimes'
    })

    it('adds the `artistName: songTitle` key-value pair to `playlist`', () => {
      updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi")

      expect(playlist).
        to.contain.all.keys({'Slowdive': 'Alison', 'My Bloody Valentine': 'Sometimes', 'Phil Ochs': "Here's to the State of Mississippi"})
    })
  })
*/


function removeFromPlaylist(playlistObject, artist) {
  delete playlistObject.artist;
  return playlistObject;
}
