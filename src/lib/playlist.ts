export type Playlist = typeof playlist
export type Track = typeof playlist.tracks[0]

export const playlist = {
  title: 'Peaceful Lofi',
  description:
    'Relax and indulge with a puff of peaceful lofi.',
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
