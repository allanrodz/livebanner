
const schedule = {
    "Monday": [
        { start: "00:00", show: "KCLR Through The Night" },
        { start: "07:00", show: "KCLR Breakfast with John Walsh" },
        { start: "10:00", show: "The KCLR Daily with Brian Redmond" },
        { start: "13:00", show: "The John Keane Show" },
        { start: "16:00", show: "The Home Run with Shannon Redmond" },
        { start: "19:00", show: "Full Time with Eddie Scally" },
        { start: "20:00", show: "Fully Loaded with Eoin Carey" },
        { start: "22:00", show: "Late Night on KCLR" }
    ],
    // Other days omitted for brevity, but they should be included here
};

function getCurrentShow() {
    const now = new Date();
    const dayOfWeek = now.toLocaleString('en-us', {weekday: 'long'});
    const currentTime = ('0' + now.getHours()).slice(-2) + ':' + ('0' + now.getMinutes()).slice(-2);

    const todaysSchedule = schedule[dayOfWeek];
    let currentShow = "Show information not available";

    for (let i = 0; i < todaysSchedule.length; i++) {
        const show = todaysSchedule[i];
        if (currentTime >= show.start && (i === todaysSchedule.length - 1 || currentTime < todaysSchedule[i + 1].start)) {
            currentShow = show.show;
            break;
        }
    }

    return currentShow;
}

function updateBanner() {
    const textSpan = document.getElementById('now-playing-text');
    textSpan.textContent = "Now Playing: " + getCurrentShow();
}

updateBanner();
setInterval(updateBanner, 60000);
