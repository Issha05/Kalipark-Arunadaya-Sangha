// Example booked dates (YYYY-MM-DD format)
let bookedDates = ["2025-10-10", "2025-10-15", "2025-10-20"];

document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const date = document.getElementById("date").value;
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const event = document.getElementById("event").value;
  const result = document.getElementById("availability");

  if (bookedDates.includes(date)) {
    result.textContent = "❌ Sorry, this date is already booked.";
    result.style.color = "red";
  } else {
    result.textContent = `✅ Booking confirmed for ${event} on ${date}. Thank you, ${name}!`;
    result.style.color = "green";

    // Add the new date to booked list (so next user can't book it)
    bookedDates.push(date);

    // For now, just log the booking (later connect to Google Sheets or Firebase)
    console.log("New Booking:", {name, phone, date, event});
  }
});
