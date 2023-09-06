

export interface Database {
  public: {
    Tables: {
      league_lu: {
        Row: {
          id?: number
          name: string
        }
        Insert: {
          id? : never
          name: string
        }
        Update: {
          id? : never
          name? : string
        }
      }
      teams: {
        Row: {
          id: number
          name: string
          abbreviation: string
          season: number
          teamName: string
          shortName: string
        }
        Insert: {
          id? : never
          name: string
          abbreviation: string
          season: number
          teamName: string
          shortName: string
        }
        Update: {
          id? : never
          name? : string
          abbreviation? : string
          season? : number
          teamName?: string
          shortName?: string
        }
      }
      league_team: {
        Row: {
          id: number
          league_id: number
          team_id: number
      }
        Insert: {
          id? : never
          league_id: number
          team_id: number
        }
        Update: {
          id? : never
          league_id? : number
          team_id? : number
        }
    }
  }
}
}