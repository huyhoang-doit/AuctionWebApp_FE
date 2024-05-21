import { useEffect } from "react";
import { formatDateString } from "./formatDateString";

export const CountDown = (props: any) => {
    console.log(props);
    console.log(formatDateString(props.date))

    // useEffect(() => {
    //     $(".umino-countdown").countdown(formatDateString(props.data), function (event) {
    //         $(this).html(
    //             event.strftime(
    //                 '<div class="count"><span class="count-amount">%D</span><span class="count-period">Days</span></div><div class="count"><span class="count-amount">%H</span><span class="count-period">Hrs</span></div><div class="count"><span class="count-amount">%M</span><span class="count-period">Mins</span></div><div class="count"><span class="count-amount">%S</span><span class="count-period">Secs</span></div>'
    //             )
    //         );
    //     });
    // }, []);

    return (
        <div className="umino-countdown">
        </div>
    )
}