import React, { useState } from 'react';
import { League } from '../types/League';
import { Team } from '../types/Team';
import { useEffect } from 'react';
import { getLeagues, createLeague, getTeams, createTeam, createLeagueTeam } from './api/api';
import { create } from 'domain';
import { LeagueTeam } from '../types/LeagueTeam';


export default function Home() {
  // Step 2: Define state for league data
  const [leagueData, setLeagueData] = useState<League | null>({
    name: '',
  });
  const [teamData, setTeamData] = useState<Team | null>({
    name: '',
    season: 0,
    abbreviation: '',
    teamName: '',
    shortName: '',
  });

  const [teamList , setTeamList] = useState<Team[]>([])
  const [leagueList , setLeagueList] = useState<League[]>([])
  const [currentLeague, setCurrentLeague] = useState<League | null>({
    name: '',
  });

  useEffect(() => {
    getLeagues()
    .then((data) => {
        console.log(data)
        if (data) {
            setLeagueList(data)
        }

    }
    )
    if (leagueList.length > 0) {
    for (let i = 0; i < leagueList.length; i++) {
        getTeams()
        .then((data) => {
            if (data) {
                setTeamList(data)
            }
        })
      }
    }
    }, [])

  
    

  // Step 4: Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (leagueData) {
      // You can perform actions like sending the data to a server here
        createLeague(leagueData)
        .then((data) => {
            if (data) {
                setLeagueList([...leagueList, data])
            }
        }
        )
    }
  };

  const handleTeamSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (teamData) {
      createTeam(teamData)
        .then((data) => {
          if (data) {
            setTeamList([...teamList, data]);
          }
        })
        .catch((error) => {
          console.error('Error creating team:', error);
        });
      if (currentLeague?.id && teamData.id) {
        createLeagueTeam({
          league_id: currentLeague.id,
          team_id: teamData.id,
        })
          .then((data) => {
            if (data) {
              console.log(data);
            }
          })
          .catch((error) => {
            console.error('Error creating league_team:', error);
          });
      } 
    }
  };
  
  // Step 3: Create a form with input fields
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter League:
          <input
            type="text"
            value={leagueData?.name || ''}
            onChange={(e) =>
                {
                    if 
                    (leagueData)
                    {
                        setLeagueData({
                            ...leagueData,
                            name: e.target.value,
                        })
                    }
                }
            }
          />
        </label>
        {/* You can add more input fields as needed */}
        <button type="submit">Submit</button>
      </form>

      <form onSubmit={handleTeamSubmit}>
        <label>
          Enter Team:
          <input
            type="text"
            value={teamData?.name || ''}
            onChange={(e) =>
                {
                    if
                    (teamData)
                    {
                        setTeamData({
                            ...teamData,
                            name: e.target.value,
                        })
                    }
                }
            }
          /> 
        </label>
        <label>
          Enter Team Abbreviation:
          <input
            type="text"
            value={teamData?.abbreviation || ''}
            onChange={(e) =>
                {
                    if
                    (teamData)
                    {
                        setTeamData({
                            ...teamData,
                            abbreviation: e.target.value,
                        })
                    } 
                }
            }
          />
        </label>
        <label>
          Enter Team Season:
          <input
            type="number"
            value={teamData?.season || 0}
            onChange={(e) =>
                {
                    if
                    (teamData)
                    {
                        setTeamData({
                            ...teamData,
                            season: Number(e.target.value),
                        })
                    }
                }
            }
          />
        </label>
        <label>
          Enter Team Name:
          <input
            type="text"
            value={teamData?.teamName || ''}
            onChange={(e) =>
                {
                    if
                    (teamData)
                    {
                        setTeamData({
                            ...teamData,
                            teamName: e.target.value,
                        })
                    }
                }
            }
          />
        </label>
        <label>
          Enter Team Short Name:
          <input
            type="text"
            value={teamData?.shortName || ''}
            onChange={(e) =>
                {
                    if
                    (teamData)
                    {
                        setTeamData({
                            ...teamData,
                            shortName: e.target.value,
                        })
                    }
                }
            }
          />
        </label>
        
        <button type="submit">Submit</button>
      </form>




      {/* Step 5: Display the data */}
      <label> League List </label>
      <select
        onChange={(e) => {
            let league = leagueList.find((league) => league.id === Number(e.target.value))
            if (league) {
                setCurrentLeague(league)
            }
        }}
      > 
          {leagueList.map((league: League) => {
              return (

                  <option key={league.id} value={String(league.id)}>{league.name}</option>
              )
          }
          )}  
      </select>

     
<label> Team List </label>
<select>
    {teamList.map((team: Team) => (
        <option key={team.id} value={String(team.id)}>{team.name}</option>
    ))}
</select>

          
    </>
  );
}
