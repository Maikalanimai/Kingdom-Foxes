select
  a.poster,
  a.post_body,
  a.id,
  gm.rank
from anouncements a
join guild_members gm on a.poster = gm.username
order by
  id desc