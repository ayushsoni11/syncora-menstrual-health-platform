 // Highlight today's date
 

document.getElementById("calculate-button").addEventListener("click", function () {
    const startDateInput = document.getElementById("start-date").value;
    // console.log(startDateInput);
    const cycleLengthInput = parseInt(document.getElementById("cycle-length").value, 10);
    // console.log(cycleLengthInput);
    const periodDurationInput = parseInt(document.getElementById("period-duration").value, 10);
    // console.log(periodDurationInput);

    if (!startDateInput || !cycleLengthInput || !periodDurationInput) {
        alert("Please fill in all fields.");
        return;
    }

    const startDate = new Date(startDateInput);
    const cyclesLength = cycleLengthInput;
    const lastPeriodLength = periodDurationInput;

    showCalendars(startDate, cyclesLength, lastPeriodLength);
});

function showCalendars(firstDay, cyclesLength, lastPeriodLength) {
    for (let i = 0; i < 3; i++) {
        const currentMonth = new Date(firstDay);
        console.log(currentMonth);
        currentMonth.setMonth(firstDay.getMonth() + i);

        const dates = getDatesInMonth(currentMonth, firstDay, cyclesLength, lastPeriodLength);
        generateCalendar(currentMonth, dates.periodDays, dates.ovulationDays, `result-${i + 1}`);
    }
}

function getDatesInMonth(date, firstDay, cyclesLength, lastPeriodLength) {
    let periodDays = [];
    let ovulationDays = [];

    // Calculate the number of cycles that have occurred since the firstDay
    const monthsDifference = date.getMonth() - firstDay.getMonth() + (12 * (date.getFullYear() - firstDay.getFullYear())); //Finds how many cycles have occurred since the firstDay using monthsDifference
    console.log(monthsDifference);
    const cycleStartDate = new Date(firstDay);
    cycleStartDate.setDate(firstDay.getDate() + monthsDifference * cyclesLength); //Updates the starting date of the cycle

    // Calculate Period Days
    for (let i = 0; i < lastPeriodLength; i++) {
        const periodDate = new Date(cycleStartDate);
        periodDate.setDate(cycleStartDate.getDate() + i);

        if (periodDate.getMonth() === date.getMonth()) {
            periodDays.push(periodDate);
        }
    }

    // Calculate Ovulation Days
    const ovulationStart = new Date(cycleStartDate);
    ovulationStart.setDate(cycleStartDate.getDate() + (cyclesLength - 16));

    for (let i = 0; i < 5; i++) {
        const ovulationDate = new Date(ovulationStart);
        ovulationDate.setDate(ovulationStart.getDate() + i);

        if (ovulationDate.getMonth() === date.getMonth()) {
            ovulationDays.push(ovulationDate);
        }
    }

    return { periodDays, ovulationDays };
}


function generateCalendar(date, periodDays, ovulationDays, calendarId) {
    const calendar = document.getElementById(calendarId);
    calendar.innerHTML = `<h3>${date.toLocaleString("default", { month: "long", year: "numeric" })}</h3>`;

    calendar.classList.add('calendar')

    
    // Days of the week
    const days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    
    // Create the table structure
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    
    // Create table header for days of the week
    const theadRow = document.createElement("tr");
    days.forEach((day) => {
        const th = document.createElement("th");
        th.textContent = day;
        theadRow.appendChild(th);
    });
    thead.appendChild(theadRow);
    table.appendChild(thead);

    // Days in the month
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    // Generate calendar dates
    let dateCounter = 1;
    for (let week = 0; week < 6; week++) {
        const tr = document.createElement("tr");
        for (let day = 0; day < 7; day++) {
            const td = document.createElement("td");

           

            // Add empty cells for days before the 1st of the month
            if (week === 0 && day < firstDay) {
                tr.appendChild(td);
            } else if (dateCounter > daysInMonth) {
                // Stop adding dates after the last day of the month
                tr.appendChild(td);
            } else {
                const currentDate = new Date(date.getFullYear(), date.getMonth(), dateCounter);
                td.textContent = dateCounter;

                // Highlight period days in pink
                const isSameDate = (date1, date2) =>
                    date1.getFullYear() === date2.getFullYear() &&
                    date1.getMonth() === date2.getMonth() &&
                    date1.getDate() === date2.getDate();

                    const today = new Date();
                    if (isSameDate(currentDate, today)) {
                        td.classList.add("today");
                    }

                if (periodDays.some((d) => isSameDate(d, currentDate))) {
                    td.classList.add("pink-cell");
                }

                // Highlight ovulation days in green
                if (ovulationDays.some((d) => isSameDate(d, currentDate))) {
                    td.classList.add("green-cell");
                }

                dateCounter++;
                tr.appendChild(td);
            }
        }

        tbody.appendChild(tr);

        // Stop generating rows if all dates are filled
        if (dateCounter > daysInMonth) {
            break;
        }
    }

    table.appendChild(tbody);
    calendar.appendChild(table);

   

}

