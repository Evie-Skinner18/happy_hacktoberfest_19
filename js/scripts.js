let date = new Date(), end = new Date(2019,9,31), numdays = Math.round((end-date)/(2678400000/32))+1;
end.setHours(date.getHours());
end.setMinutes(date.getMinutes());
end.setSeconds(date.getSeconds());
end.setMilliseconds(date.getMilliseconds());
document.getElementById("numdays").innerHTML = numdays;
