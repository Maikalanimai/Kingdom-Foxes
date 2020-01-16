update guild_members
set hash_pass = $1
where username = $2;