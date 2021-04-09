var currentDay = $('#currentDay')
currentDay.text(moment().format('dddd, MMMM Do'))

var timeBlockContainer = $('.container')
var currHour = moment().format('HH')

for (var i = 9; i < 19; i++) {
  var timeBlockDiv = $(`<div class="time-block row">
    <div class="hour col-1">${i}</div>
    <textarea class="description col-10" id="${i}"></textarea>
    <button class="saveBtn col-1" id='saveBtn${i}' type="submit"><i style='font-size:24px' class='fas'>&#xf0c7;</i></div>
    </button>`)
  timeBlockContainer.append(timeBlockDiv)
}

for (var i = 9; i < 19; i++) {
  var textAreaEl = $(`#${i}`)
  if (currHour == textAreaEl.attr('id')) {
    textAreaEl.addClass('present')
  }
}

for (var i = 9; i < 19; i++) {
  var textAreaEl = $(`#${i}`)
  if (textAreaEl.attr('id') < currHour) {
    textAreaEl.addClass('past')
  }
}

for (var i = 9; i < 19; i++) {
  var textAreaEl = $(`#${i}`)
  if (textAreaEl.attr('id') > currHour) {
    textAreaEl.addClass('future')
  }
}

for (var i = 9; i < 19; i++) {
  var saveBtn = $(`#saveBtn${i}`)
}
