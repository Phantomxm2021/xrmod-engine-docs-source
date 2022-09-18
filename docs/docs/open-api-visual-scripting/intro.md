---
sidebar_position: 0
title: Introduction 
slug: /
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,XR,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: produce an xr experience without writing code.
---

import VideoPlayer from '@site/src/components/VideoPlayer'

<VideoPlayer src="/static/videos/multiplayer.mp4" className="custom-video-showcase" />

## Visual scripting

Visual scripting in Unity empowers creators to develop gameplay mechanics or interaction logic with a visual, graph-based system, instead of writing traditional lines of code.

---

## Create scripting logic visually

Visual scripting in Unity helps team members create scripting logic with visual, drag-and-drop graphs instead of writing code from scratch. It also enables more seamless collaboration between programmers, artists, and designers for faster prototyping and iteration.

<coverimg url={require('../../static/static/creative-api/visualscripting.png')} height="25rem" />

---

## Enhanced control for artists and designers

Visual scripting is a great solution for both designers and artists who want to test ideas, make changes, or maintain more direct control over their work in Unity. Non-programmers can also make use of node graphs created by more technical team members.

<coverimg url={require('../../static/static/creative-api/visualscripting2.png')} height="25rem" />

## Key benefits

### Flow Graphs

Flow Graphs are the main tool for creating interactions in your projects. Using node-based actions and values, these graphs let you execute logic in any order you specify, be it at every frame or when an event occurs.

### State Graphs

State Graphs allow you to create self-contained behaviors that tell objects what actions to execute when they are in a particular state. They are suited for high-level logic such as AI behaviors, scene or level structure, or any aspect of a scene that requires behaviors that transition between states.

### Live Editing

Make changes to graphs in Play Mode to see visual scripting updates in real-time. This offers a much faster way to iterate and test ideas without needing to recompile project changes.

### Debugging and analysis

Visual scripting is designed to show the values across the graph during play mode, and will highlight which nodes are being executed when it happens. If an error occurs at runtime, the source will be identified by highlighting it in the graph.

### Designed for ease of use

Visual scripting is designed to be accessible for less technical creators through user-friendly naming conventions, commenting and grouping features that keep graphs simple to read, and the Fuzzy Finder, which makes it easy to search for what you need.
