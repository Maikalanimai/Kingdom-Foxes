update guild_members
set username= $1,
date_joined = $2,
gender=$3,
region=$4,
rank=$5,
class=$6,
medals=$7,
country=$8,
admin_authorized=$9,
is_pm=$10
where id = $11;
