// useIntersectionObserver with InfiniteScrollComponent (Single File)
import React, { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (callback, options) => {
    const targetRef = useRef(null);

    useEffect(() => {
        if (!targetRef.current) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                callback();
            }
        }, options);

        observer.observe(targetRef.current);

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, [callback, options]);

    return targetRef;
};

const InfiniteScrollComponent = () => {
    const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`));

    const loadMoreItems = () => {
        setItems((prevItems) => [
            ...prevItems,
            ...Array.from({ length: 10 }, (_, i) => `Item ${prevItems.length + i + 1}`),
        ]);
    };

    const targetRef = useIntersectionObserver(loadMoreItems, { threshold: 1.0 });

    return (
        <div>
            <h2>Infinite Scroll Example</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index} style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                        {item}
                    </li>
                ))}
            </ul>
            <div ref={targetRef} style={{ height: "20px", background: "lightgray" }} />
        </div>
    );
};

export default InfiniteScrollComponent;
