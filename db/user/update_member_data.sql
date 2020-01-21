
insert into player_data (
    username,
    rank,
    first_join,
    playtime,
    chests_found,
    steps_taken,
    mobs_killed,
    combined_level,
    combat_level,
    logins,
    deaths
  )
values
  (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8,
    $9,
    $10,
    $11
  ) 