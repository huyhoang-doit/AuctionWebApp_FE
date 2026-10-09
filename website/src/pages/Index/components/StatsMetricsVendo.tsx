import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useMotionValueEvent, useSpring } from "framer-motion";
import "./StatsMetricsVendo.css";

interface CounterProps { value: number; suffix: string; decimals?: number; }

function Counter({ value, suffix, decimals = 0 }: CounterProps) {
  const target = useMotionValue(0);
  const spring = useSpring(target, { damping: 30, stiffness: 100 });
  const [display, setDisplay] = useState((0).toFixed(decimals));
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => { if (isInView) target.set(value); }, [isInView, target, value]);
  useMotionValueEvent(spring, "change", (latest) => setDisplay(latest.toFixed(decimals)));

  return <span className="vendo-counter" ref={ref}>{display}{suffix}</span>;
}

function Smiley() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><path d="M9 9h.01M15 9h.01" /></svg>;
}

const people = ["AN", "MH", "TL", "HN", "VP"];

export default function StatsMetricsVendo() {
  return <section className="vendo-metrics" aria-label="Số liệu minh họa">
    <p className="vendo-metrics__eyebrow">DỮ LIỆU MINH HỌA</p>
    <div className="vendo-metrics__bar">
      <motion.article className="vendo-metrics__item" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <div className="vendo-toggle" aria-hidden="true"><motion.span animate={{ x: [0, 28, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}><Smiley /></motion.span></div>
        <h2><Counter value={95} suffix="%" /></h2>
        <p>người tham gia cho biết quy trình đấu giá <strong>rõ ràng sau 14 ngày</strong></p>
      </motion.article>
      <motion.article className="vendo-metrics__item" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.08 }}>
        <div className="vendo-avatars" aria-hidden="true">{people.slice(0, 3).map((person) => <span key={person}>{person}</span>)}</div>
        <h2><Counter value={1.9} decimals={1} suffix="M+" /></h2>
        <p>lượt tiếp cận tài sản từ <strong>90 quốc gia</strong> trong dữ liệu giả lập</p>
      </motion.article>
      <motion.article className="vendo-metrics__item" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.16 }}>
        <div className="vendo-avatars vendo-avatars--two" aria-hidden="true">{people.slice(3).map((person) => <span key={person}>{person}</span>)}</div>
        <h2><Counter value={10} suffix="K+" /></h2>
        <p><strong>mức giá được ghi nhận</strong> trong các phiên mô phỏng</p>
      </motion.article>
    </div>
  </section>;
}
