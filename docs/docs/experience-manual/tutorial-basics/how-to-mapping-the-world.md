---
title: How To Mapping The World
---
:::tip
A **Feature Point** is a distinct, high-contrast visual feature in an image. A corner of a poster on the wall, the grain on a wooden floor or a detail in the facade of a building.
:::

Map construction works by finding the same **Feature Points** in multiple images from different viewpoints and estimating the 3D structure of scene by triangulating those feature points.

It is important to try to cover the target environment from multiple viewpoints and possibly different distances if necessary.

:::caution
You should aim to have even as much as 50% overlap between images you want to match.  
For best results, the same Feature Points should be matched in at least 3 different images
:::

When mapping, our **Mapping App** will notify you if subsequent images can be connected by matching **Feature Points**.

Below is an illustration of 9 captured images and how they connect to each other.

:::info
Keep in mind that not all sequential images need to connect!  
The above images were captured in sequence, and images 3 and 4 are not connected to each other. That does not matter as, for example,  image 3 will connect to 1, 2 and 9 when the map is constructed.
:::