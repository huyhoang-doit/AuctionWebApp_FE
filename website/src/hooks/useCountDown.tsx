import { useEffect, useState } from "react";
import { Auction } from "../models/Auction";
import { formatDateString } from "../utils/formatDateString";
import { changeStateAuction } from "../api/AuctionAPI";
import { useTranslation } from "react-i18next";

const useCountDown = (auction: Auction | null) => {
  const { t } = useTranslation(["Hooks"]);

  const [timeLeft, setTimeLeft] = useState<
    { days: number; hours: number; minutes: number; seconds: number } | string
  >("");

  useEffect(() => {
    if (auction && auction.startDate && auction.endDate) {
      const now = new Date().getTime();
      const startDate = new Date(formatDateString(auction.startDate)).getTime();
      const endDate = new Date(formatDateString(auction.endDate)).getTime();

      if (auction.state === "ONGOING") {
        // Calculate countdown until end date
        const distanceToEnd = endDate - now;

        if (distanceToEnd < 0) {
          setTimeLeft(t("Hooks.auctionEnded"));
          changeStateAuction(auction.id, "FINISHED");
          return;
        }

        const daysToEnd = Math.floor(distanceToEnd / (1000 * 60 * 60 * 24));
        const hoursToEnd = Math.floor(
          (distanceToEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutesToEnd = Math.floor(
          (distanceToEnd % (1000 * 60 * 60)) / (1000 * 60)
        );
        const secondsToEnd = Math.floor((distanceToEnd % (1000 * 60)) / 1000);

        setTimeLeft({
          days: daysToEnd,
          hours: hoursToEnd,
          minutes: minutesToEnd,
          seconds: secondsToEnd,
        });
      } else if (auction.state === "WAITING") {
        // Calculate countdown until start date
        const distanceToStart = startDate - now;

        if (distanceToStart < 0) {
          setTimeLeft(t("Hooks.auctionRunning"));
          changeStateAuction(auction.id, "ONGOING");
          return;
        }

        const daysToStart = Math.floor(distanceToStart / (1000 * 60 * 60 * 24));
        const hoursToStart = Math.floor(
          (distanceToStart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutesToStart = Math.floor(
          (distanceToStart % (1000 * 60 * 60)) / (1000 * 60)
        );
        const secondsToStart = Math.floor(
          (distanceToStart % (1000 * 60)) / 1000
        );

        setTimeLeft({
          days: daysToStart,
          hours: hoursToStart,
          minutes: minutesToStart,
          seconds: secondsToStart,
        });
      } else if (auction?.state === "FINISHED") {
        // Auction finished
        setTimeLeft(t("Hooks.auctionEnded"));
        return;
      }

      const timer = setInterval(() => {
        const now = new Date().getTime();

        if (auction.state === "ONGOING") {
          const distanceToEnd = endDate - now;

          if (distanceToEnd < 0) {
            setTimeLeft(t("Hooks.auctionEnded"));
            clearInterval(timer);
            return;
          }

          const daysToEnd = Math.floor(distanceToEnd / (1000 * 60 * 60 * 24));
          const hoursToEnd = Math.floor(
            (distanceToEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutesToEnd = Math.floor(
            (distanceToEnd % (1000 * 60 * 60)) / (1000 * 60)
          );
          const secondsToEnd = Math.floor((distanceToEnd % (1000 * 60)) / 1000);

          setTimeLeft({
            days: daysToEnd,
            hours: hoursToEnd,
            minutes: minutesToEnd,
            seconds: secondsToEnd,
          });
        } else if (auction.state === "WAITING") {
          const distanceToStart = startDate - now;

          if (distanceToStart < 0) {
            setTimeLeft(t("Hooks.auctionRunning"));
            clearInterval(timer);
            return;
          }

          const daysToStart = Math.floor(
            distanceToStart / (1000 * 60 * 60 * 24)
          );
          const hoursToStart = Math.floor(
            (distanceToStart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutesToStart = Math.floor(
            (distanceToStart % (1000 * 60 * 60)) / (1000 * 60)
          );
          const secondsToStart = Math.floor(
            (distanceToStart % (1000 * 60)) / 1000
          );

          setTimeLeft({
            days: daysToStart,
            hours: hoursToStart,
            minutes: minutesToStart,
            seconds: secondsToStart,
          });
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [auction, t]);

  return timeLeft;
};

export default useCountDown;
