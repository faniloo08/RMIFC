"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion"

const ColorSwitcher = () => {
    const [activeClass, setActiveClass] = useState<string>("Light");

    const colorHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const targetText = e.currentTarget.textContent;
        if (targetText) {
            window.localStorage.setItem("color-mode", targetText);
            setActiveClass(targetText);
        }
    }

    useEffect(() => {
        const colorModeStore = window.localStorage.getItem("color-mode") || "Light";
        setActiveClass(colorModeStore);

        if (colorModeStore === "Dark") {
            document.body.classList.add("active-dark-mode");
            document.body.classList.remove("active-light-mode");
        } else {
            document.body.classList.add("active-light-mode");
            document.body.classList.remove("active-dark-mode");
        }
    }, []);

    const [mousePosition, setMousePosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        }

        window.addEventListener("mousemove", mouseMove);
        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }

    }, []);

    const variants = {
        default: {
            x: mousePosition.x,
            y: mousePosition.y
        }
    }

    return (
        <>
            <motion.div variants={variants} animate="default" className="mouse-cursor cursor-outer" />
            <motion.div variants={variants} animate="default" className="mouse-cursor cursor-inner" />

            <div className="my_switcher">
                <ul>
                    <li>
                        <Link href="#/" className={`setColor ${activeClass === "Light" ? "active" : ""}`} onClick={colorHandler}>
                            <span title="Light Mode">Light</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#/" className={`setColor ${activeClass === "Dark" ? "active" : ""}`} onClick={colorHandler}>
                            <span title="Dark Mode">Dark</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ColorSwitcher;
