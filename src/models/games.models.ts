export interface IGames {
  appid: number
  name: string
  deaths: number
  playtime_2weeks: number
  playtime_disconnected: number
  playtime_forever: number
  playtime_linux_forever: number
  playtime_mac_forever: number
  playtime_windows_forever: number
  rtime_last_played: number
}

export interface IGamesResponse {
  status: number
  data: Array<IGames>
}
