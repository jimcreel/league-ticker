import { createClient } from '@supabase/supabase-js'; 
import { Database } from '../../types/Database/Database';
import { Team } from '../../types/Team';
import { League } from '../../types/League';
import { LeagueTeam } from '../../types/LeagueTeam';

const supabase = createClient<Database>(
    process.env.REACT_APP_SUPABASE_URL as string,
    process.env.REACT_APP_SUPABASE_KEY as string
  )

  export async function getLeagues() {
    const { data, error } = await supabase
    .from('league_lu')
    .select('*')
    if (error) {
        console.log(error)
    }
    return data
}

export async function getLeagueTeam(id: number) {
    const { data, error } = await supabase
    .from('league_team_lu')
    .select('*')
    .eq('league_id', id)
    if (error) {
        console.log(error)
    }
    return data
}


export async function getTeams() {
    const { data, error } = await supabase
    .from('teams')
    .select('*')
    return data
}

export async function getTeam(id: number) {
    const { data, error } = await supabase
    .from('teams')
    .select('*')
    .eq('id', id)
    return data
}

export async function createLeague(req:League) {
    
    // remove id from req
    delete req.id
    console.log('createLeague api',req)
    const { data, error } = await supabase
    .from('league_lu')
    .insert(req)
    if (error) {
        console.log(error)
    }
    return data
}

export async function createTeam(req:Team) {
    const { data, error } = await supabase
    .from('teams')
    .insert(req)
    if (error) {
        console.log(error)
    }
    return data
}

export async function createLeagueTeam(req: LeagueTeam){
    const {data, error} = await supabase
    .from('league_team')
    .insert(req)
    if (error) {
        console.log(error)
    }
    return data
}

