import Header from "../components/Header";
import Sport from "../components/Sport";
import Bottom from "../components/Bottom";
import Weeks from '../components/Weeks';
import sportsSuggestions from "../services/sportsSuggestions";
const Sports = () => {
    const getCurrentPregnancyWeek = (startDate, currentDate) => {
        // Parse the dates
        const start = new Date(startDate);
        const current = new Date(currentDate);

        // Calculate the number of days between the two dates
        const timeDiff = current - start;
        const dayInMillis = 1000 * 60 * 60 * 24; // Number of milliseconds in a day
        const daysDiff = Math.floor(timeDiff / dayInMillis);

        // Calculate the number of weeks
        const weeksDiff = Math.floor(daysDiff / 7);

        // Ensure the week number is non-negative
        return Math.max(0, weeksDiff);
    };
    function startDate() {
        let session = localStorage.getItem('uid');
        let parsedData = JSON.parse(session);
        // console.log(parsedData.pregnancyDate);
        return parsedData.pregnancyDate;

    }
    const today = new Date().toISOString().split('T')[0];

    const SportsSuggestionsForWeek = ({ weekNumber = getCurrentPregnancyWeek(startDate(), today) }) => {
        // Filter suggestions based on the weekNumber
        const suggestionsForWeek = sportsSuggestions.filter(suggestion => suggestion.weekNumber === weekNumber);

        return (
            <div>
                {suggestionsForWeek.length > 0 ? (
                    suggestionsForWeek.map(({ sportsName, prescription }, index) => (
                        <Sport
                            key={index}
                            Sportname={sportsName}
                            prescription={prescription}
                        />
                    ))
                ) : (
                    <p>No Sport suggestions available for week {weekNumber}</p>
                )}
            </div>
        );
    };

    return (
        <>
            <Header action="back" head="Sports" profile="profile" />
            <Weeks />

            {/* <Food foodName="mellow" prescription="lorem" />
            <Food foodName="mellow" prescription="lorem" />
            <Food foodName="mellow" prescription="lorem" />
            <Food foodName="mellow" prescription="lorem" />
            <Food foodName="mellow" prescription="lorem" />
            <Food foodName="mellow" prescription="lorem" /> */}
            {/* <SportsSuggestionsForWeek weekNumber={currentWeek} /> */}
            <SportsSuggestionsForWeek />
            <Bottom />

        </>
    )
}

export default Sports
