# 25 + 5 Clock

A Pomodoro-style timer built with React that allows users to manage focused work (session) and rest (break) intervals using a minimalist, responsive design.

## Features

* Adjustable session and break lengths (1–60 minutes).
* Start, pause, and reset the timer with a single click.
* Automatically switches between session and break modes.
* Plays a sound when each period ends.

## Tech Stack

* **React**: Functional components with `useState`, `useEffect`, and `useRef` for timer and state control.
* **Tailwind CSS**: Clean, utility-first styling for layout, responsiveness, and button states.
* **JavaScript**: Core timer logic using interval management and time formatting.

## What I Learned

* **Precise Timer Control with useRef**: Used a `ref` to store the interval ID, ensuring the countdown properly pauses/resumes and avoids stale closures.
* **State Synchronization**: Synced timer display with break/session length updates only when paused, preserving expected behavior.
* **Component Modularity**: Separated timer, controls, and length settings into reusable components for clarity and maintainability.