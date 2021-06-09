/* exported data */
var data = {
  homeName: '',
  homeTown: null,
  days: []
};

var previousData = localStorage.getItem('calendar-data');
if (previousData) {
  data = JSON.parse(previousData);
}

window.addEventListener('beforeunload', handleSave);

function handleSave(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('calendar-data', dataJSON);
}
