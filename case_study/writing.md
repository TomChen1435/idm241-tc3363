# Case Study

## Hero Image

## Overview

This the executive summary of your case study. It allows your prospects to quickly understand the highlights of your past work without reading the entire thing. This section should include the core takeaways from all other sections including the main problem, an overview of the solution, and key results. This is typically written last, so that you can scan for the main points from each section below and summarize them into a one or two paragraph synopsis.

## Context and Challenge

This section is designed to provide your prospective client with a detailed description of the context that led to the creation of the project, and can be distilled into three main elements:

1. Background / Description / Timeline / Budget / Purpose
2. The Problem: Define why this project exists and what problem it seeks to solve.
3. Goals & Objectives: What are the metrics that will define if this project is successful. What are the tangible goals.

Give a quick overview of the project. What were the goals for the project. Keep the focus on problem-solving, not just asset delivery. Define if it was a solo or team based project. If team based, what your role was on the project.

## Process and Insight

This section should elaborate on your design process. How did you go about developing the final solution. What were the steps that will help the reader to visualize the work and, more importantly, to see that it was created by human beings. We want see how the final came into being, not just what the piece looks like at the end. These could include (but not limited to) research:

* Target Audience / User Personas
* User Journeys
* Design Sketches
* Wireframes
* Style Guide
* Prototypes
* Code/Dev
* UX Testing Notes
* Final Project

If this was a team based project, make sure to define your specific contributions to the project. When was there team consensus, and what were you specifically responsible for. Be sure to include images / video for each stage of the process as appropriate.

## Solution

This is where you get to show off your final design with detailed images and videos, and a link to the live project if available. Describe your design work. Take the time to explain in detail your site’s defining features like its UX, navigation structure, content strategy, or unique mobile attributes. If you put the effort into crafting descriptions that complement your visual assets, your readers will feel much more confident in your decisions as a designer/developer.

## Results

A quick wrap up. Was the project a success and why. Do you have qualitative and quantitative success metrics from your project? These should directly address the objectives you established in The Context and Challenge section. If this is client work, include a client testimonial. This also is an opportunity to define the lessons learned and what you would change about your process / approach in the future.

## Draft

### Overview

This project presents a full redesign of Flying Blue’s discounted-ticket display modal, completed over a 10-week term using only vanilla HTML, CSS, and JavaScript. The original interface relied on multiple redundant cards and abrupt microinteractions, creating visual clutter and transitions that felt harsh for users. My goal was to simplify the structure, improve clarity, and establish smoother, more accessible interaction patterns.

The final solution consolidates all cards into a single calendar-style modal with a primary display panel and twelve fixed thumbnails. Unified 250ms fade transitions, refined visual hierarchy, and a modular content-injection system create a cleaner and more predictable user experience. Through iterative prototyping and thorough front-end reconstruction, the project delivered a calmer, more cohesive interaction model that aligns with Flying Blue’s branding while improving usability. The work also reinforced the importance of planning time for code cleanup and maintaining a clear, maintainable logic structure throughout development.

### Context & Challenge

Over a 10-week term, I completed a solo redesign of the discounted-ticket display modal for Flying Blue, the Air France–KLM rewards program. The assignment required rebuilding the interaction using only vanilla HTML, CSS, and JavaScript, which imposed a useful constraint: every part of the experience had to be authored from scratch, without relying on frameworks or prebuilt transitions.

The project addressed a recurring usability issue on the existing interface: the original design relied on multiple nearly identical cards with abrupt microinteractions, resulting in a fragmented layout and visually harsh transitions. These split the user’s attention, occupied unnecessary space, and created uncomfortable flashes for users sensitive to sudden motion or blinking. Motivated both by my interest in aviation and by the clear opportunity for simplification, I focused on redesigning the modal in a way that prioritized clarity over stylistic novelty.

The primary goal was to consolidate all those individual cards into a single, unified modal capable of presenting the same information more efficiently. Success would mean a more compact interaction surface and a smoother, more predictable transition flow that supports calmer, more accessible user experiences.

### Process & Insight

The project centered on iterative prototyping, moving through three major versions: an alpha, beta, and final build. Each began as a Figma prototype before being fully reconstructed in hand-written HTML, CSS, and JavaScript. The alpha version focused on faithfully recreating Flying Blue’s original modal, allowing me to analyze its structure and identify core issues—particularly the abrupt, non-existent transitions and a hover state that relied solely on heavy, underlined text. These choices made the two-line card contents feel cramped and diminished the clarity of an otherwise strong typeface like Open Sans.

The beta version evolved into a complete visual redesign. It offered a far more appealing and expressive interaction model, but its complexity came at the cost of poor responsiveness. This informed the direction for the final version, which intentionally scaled back its visual density. I adopted a calmer, more utilitarian aesthetic that ensured consistent behavior across screen sizes and opportunities to remove several functions that were visually interesting but ultimately unnecessary.

On the development side, I built a supporting information panel and a custom text-injecting script, which let me keep explanations separate from the HTML structure. This allowed the core modal to remain clean and focused. To preserve brand continuity, I adhered closely to Flying Blue’s established color system and emphasized Open Sans’s range of weights and sizes more effectively than the original design. Microinteractions were divided into two categories: hover states, handled entirely through CSS for immediate responsiveness, and all other interactive behaviors, which were implemented with custom JavaScript. This separation kept the code modular and easier to fine-tune.

The project was tested on both my personal machine and school computers to ensure consistent rendering and performance across environments. These checks confirmed that the final iteration provided stable behavior, smoother transitions, and improved visual clarity compared to the original interface.

### Solution

The final design consolidates all of the original cards into a single modal built around a calendar-like structure. A primary display panel presents detailed information, while twelve fixed thumbnails—arranged in a clean 4×3 grid—function as selectors. Each thumbnail corresponds directly to one of the original cards, allowing users to browse options without the clutter of multiple independent elements. This architecture preserves the breadth of available information while dramatically reducing visual fragmentation.

Interaction within the modal is driven by a consistent 250ms fade transition, applied across both thumbnail switching and content updates. This timing choice creates a calm, predictable rhythm that avoids the abrupt flashes of the original design and makes the experience more accessible for users sensitive to sudden motion. Visual hierarchy is established through a deliberate mix of iconography, varied font weights, and color cues, enabling users to immediately distinguish key data from secondary details.

From a development standpoint, the layout relies on a standardized, reusable system for content injection. Because all thumbnails share an identical structure, I implemented a series of JavaScript functions—similar to the approach used in the supplementary information panel—to manage content shifts cleanly and efficiently. This kept the codebase modular, minimized repetition, and ensured that each state change felt cohesive within the broader interaction model.

The final interactive modal is live and housed on the same site as the case study, allowing viewers to explore the redesign directly alongside its documentation.

### Results

The project ultimately met all of the criteria established at the outset: consolidating multiple cards into a single modal, introducing a clearer visual hierarchy, and replacing abrupt microinteractions with smooth, consistent transitions. The final experience is simpler, calmer, and more coherent, successfully addressing the core usability issues identified in the original interface.

Although there were no quantitative metrics for this assignment, the qualitative improvements were significant. The redesigned layout reduced visual noise, made key information more immediately legible, and established a predictable interaction rhythm through standardized 250ms fade transitions. Feedback throughout the term—especially from my professor—helped refine both the clarity of my design reasoning and my approach to resolving structural issues in the code.

A major takeaway from the project was the importance of allocating time for systematic code cleanup. As the design evolved, ad-hoc patches accumulated quickly, and I learned how easily a project’s logic can become tangled without deliberate refactoring. This insight will shape how I plan and pace future development work, ensuring cleaner, more maintainable systems from the start.
