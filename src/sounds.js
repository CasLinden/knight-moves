import { Howl } from 'howler'
import movemp3 from './assets/move.mp3'
import flagmp3 from './assets/flag.mp3'

export const moveSound = new Howl({
  src: [movemp3]
})

export const flagSound = new Howl({
  src: [flagmp3]
})

