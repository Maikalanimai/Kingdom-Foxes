select 
pd.username,
pd.rank,
pd.playtime,
pd.chests_found,
pd.steps_taken,
pd.mobs_killed,
pd.combined_level,
pd.combat_level,
pd.logins,
pd.deaths
-- gm.rank,
-- gm.class,
-- gm.medals 
from player_data pd
-- join guild_members gm on pd.username = gm.username

where pd.username = $1