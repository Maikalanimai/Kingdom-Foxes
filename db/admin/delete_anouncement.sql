delete from anouncements
where id = $1
returning * 