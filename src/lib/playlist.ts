export type Playlist = typeof playlist
export type Track = typeof playlist.tracks[0]

export const playlist = {
  title: 'Musixx',
  description:
    'Just a simple music/mp3 player',
  cover: 'playlist/cover.jpg',
  tracks: [
    {
      title: 'Missing You',
      album: 'Distant Worlds',
      artist: 'Purrple Cat',
      cover: 'playlist/track-01/cover.jpg',
      added: '2 days ago',
      duration: 62,
      url: 'playlist/track-01/track.mp3',
    },
  ],
}
