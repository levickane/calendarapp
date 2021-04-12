var currentDay = $('#currentDay')
currentDay.text(moment().format('dddd, MMMM Do'))

var timeBlockContainer = $('.container')
var currHour = moment().format('HH')

calendarDataArray = {}

for (let i = 1; i < 25; i++) {
  var amOrPm = moment().format(`${i}`)
  var timeBlockDiv = $(`<div class="time-block row">
    <div class="hour col-1">${amOrPm}${amOrPm >= 12 ? 'PM' : 'AM'}</div>
    <textarea class="description col-10" id="${i}"></textarea>
    <button class="saveBtn col-1" id='saveBtn${i}' type="submit"><i style='font-size:24px' class='fas'>&#xf0c7;</i></div>
    </button>
    </div>`)
  timeBlockContainer.append(timeBlockDiv)
  var textAreaEl = $(`#${i}`)
  var saveBtn = $(`#saveBtn${i}`)

  if (parseInt(textAreaEl.attr('id')) == parseInt(currHour)) {
    textAreaEl.addClass('present')
  } else if (parseInt(textAreaEl.attr('id')) < parseInt(currHour)) {
    textAreaEl.addClass('past')
  } else if (parseInt(textAreaEl.attr('id')) > parseInt(currHour)) {
    textAreaEl.addClass('future')
  }
  saveBtn.on('click', function (e) {
    calData = this.closest('div').children[1].value
    console.log(calData)
    //localstorage
    calendarDataArray[i] = calData
    localStorage.setItem('calendarData', JSON.stringify(calendarDataArray))
  })
  calendarDataArray = JSON.parse(localStorage.getItem('calendarData')) ?? {}

  console.log(Object.keys(calendarDataArray))
  console.log(typeof Object.keys(calendarDataArray)[0])
  if (Object.keys(calendarDataArray).includes(`${i}`)) {
    console.log('hello')
    textAreaEl.val(calendarDataArray[i])
  }
}

console.log(calendarDataArray)
