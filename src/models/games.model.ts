export interface IGames {
  appid: number
  name: string
  image: string
  deaths: number
  achievements: string
  playtime_2weeks: number
  playtime_disconnected: number
  playtime_forever: number
  playtime_linux_forever: number
  playtime_mac_forever: number
  playtime_windows_forever: number
  rtime_last_played: number
  statusText: string
  isActive: boolean
}
