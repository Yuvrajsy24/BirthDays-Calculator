// Show today's date
const todayDate = new Date();
document.getElementById("today").innerText =
    "📅 Today: " + todayDate.toDateString();

function find(event) {
    event.preventDefault();

    const day = Number(document.getElementById("day").value);
    const month = Number(document.getElementById("month").value);

    const now = new Date();
    let birthday = new Date(now.getFullYear(), month - 1, day);

    // Invalid date check (like Feb 30)
    if (birthday.getDate() !== day || birthday.getMonth() !== month - 1) {
        document.getElementById("msg").innerText = "❌ Invalid date entered";
        return;
    }

    // If birthday passed, move to next year
    if (birthday < now) {
        birthday.setFullYear(now.getFullYear() + 1);
    }

    const diff = birthday - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    if (days === 0) {
        document.getElementById("msg").innerText =
            "🎉🎂 HAPPY BIRTHDAY! 🎂🎉";
    } else {
        document.getElementById("msg").innerText =
            `🎈 ${days} days, ${hours} hours, ${minutes} minutes left!`;
    }
}
