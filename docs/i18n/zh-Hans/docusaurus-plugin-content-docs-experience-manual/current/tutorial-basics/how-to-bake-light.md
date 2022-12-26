---
title: How To Bake Light Into Prefab
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,XR,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: Baking light allows you to experience less consumption and more power savings.
---
Lighting is one of the most important elements in a game. It can be used to create an atmosphere, guide the player, flag threats or targets, and more. Lighting can make or break a game's visual effects. For example, good lighting can improve the visual appearance of a poor model in the game, while poor lighting can make an otherwise good model look bad.

This guide will provide information on how to improve lighting performance in mobile games. How you decide to use lighting will affect the performance of your mobile game. Therefore, it is important to use lighting efficiently to ensure the game runs as smoothly as possible.

When developing content for interactive, XR, games, etc., it's important to make it work smoothly on as many devices as possible. 

## Light Mode

Different light modes are used based on how a light moves or is used in a Scene. Light mode types have different performance characteristics. When you implement lights, consider the following:

- Use baked for static lighting. This is best for objects that don't change their lighting during runtime. Baking lights is the process of pre-computing and storing lighting data in texture maps referred to as [lightmaps](https://docs.unity3d.com/Manual/Lightmapping.html).
    - Baked lighting can't be modified at runtime. The light and shadows in the lightmaps are static. Since all of the lighting was pre-processed in Unity, there aren’t any runtime lighting calculations impacting performance.    
    - Dynamic shadows can’t be created with baked light. This might look odd with dynamic or moving objects.

- Use mixed for stationary lights you intend to interact with moving objects. For example, a torch that casts light on a player and generates a shadow as the player moves by.

    - Mixed lighting creates dynamic direct light and shadow.
    - You can include mixed lighting in lightmap calculations for static objects.
    - You can change the intensity at runtime. Only direct light is updated.
    - Expensive.
    
- Use real time for dynamic or movable lights, such as light cast from a fireball that rises from the ground and explodes.
    - Dynamic light and shadow properties can be modified at runtime.
    - Real-time lights are not baked into lightmaps.
    - Very expensive.

For more information, read [Unity's Lighting Pipeline](https://docs.unity3d.com/Manual/BestPracticeLightingPipelines.html).

## When possible, use static light and avoid dynamic light

Dynamic, or real-time, lighting is calculated and updated every frame. This is great for moving objects, interactivity, and to create emotion.

In contrast, static light information is baked into lightmaps. Lightmap texture usage enables an object to avoid expensive per-vertex or per-pixel lighting calculations. The rendering cost of a lightmap texture is always much cheaper than dynamic lighting. We recommend that baked lighting be your first choice for implementation into a mobile game.

## Lightmap baking

The pre-calculation of the effects of light is known as lightmap baking. The effect of the light is stored in a separate texture, called a lightmap. The lightmap can be used to augment the appearance of objects. Lightmap baking only needs to be done once per iteration of your Scene. If you change the geometry of your Scene, or change the parameters of the baked lights, you will need to rebake the lightmaps. Except for the overhead of the lightmap texture, there aren’t any extra performance costs at runtime. This is the best initial approach to lighting on a mobile platform.


Baked light isn’t affected by any dynamic, or moving, aspects of your Scene. Baked lighting does include [Baked Global Illumination](https://docs.unity3d.com/560/Documentation/Manual/GIIntro.html) for all of the static elements. This means lightmap calculations include indirect light that has bounced off other static objects as well as the baked lights that strike the object directly.

<coverimg  url={require('@site/static/static/tutorial-basics/how-to-bake-light/baked-light-example.jpg')} padding="0.5rem" label="Figure 1. The all-baked lighting setup used in the Armies tech demo."/>

### Step 1: Set the lights to Mixed or Baked

Set the lights' **Mode** to either Mixed or Baked. For mobile titles, it’s best to use Baked lights over Mixed. Baked is the least expensive way to render light.

<center>
<coverimg  url={require('@site/static/static/tutorial-basics/how-to-bake-light/light-component.jpg')} width="50%" padding="0.5rem" label="Figure 2. The light’s Mode setting in Unity."/>
</center>

### Step 2. Make objects static

Make any objects that are affected by the baked lights **Static**. There are many optimizations for an object marked as static, but usually it's best to select **Everything** in the **Static** drop-down list. With the object marked as **Static**, Unity knows to include it in the light baking.

:::tip
Note: If you have **Batching Static** enabled, you can’t move or animate objects marked as **Static**. Leave this optimization on wherever possible.
:::

<center>
<coverimg  url={require('@site/static/static/tutorial-basics/how-to-bake-light/static-light-menu.jpg')} width="50%" padding="0.5rem" label="Figure 3. An example static menu."/>
</center>

### Step 3. Baking your lights

You can bake your lights with the **Lighting** menu found in **Window** > **Rendering** > **Lighting Settings**.

When you bake lights, the data saved is based on whatever Scene was active when you started the bake. A folder is generated with the same name as the baked Scene. This folder stores all of the components for the lighting data. If your project loads multiple Scenes at one time, you must bake the lights for each Scene. If you adjust your Scene, you must re-bake the lights.

<center>
<coverimg  url={require('@site/static/static/tutorial-basics/how-to-bake-light/scene-maps.jpg')} width="50%" padding="0.5rem" label="Figure 4. An example of baked lightmaps."/>
</center>

## Bake Lightmap In XRMOD

Since the Unity Lightmap function needs to be associated with scene information and the scene is not available in XRMOD, the scene baked data cannot be used.

Nevertheless, we can also bake the lighting information to Prefab. We can use **nukadelic's Prefab-Baker** to finish baking the lights into the Prefab.

1. Create a new scene and put our 3D model into it.
2. Create an empty game object to hold your 3D model and ligths
3. Light up your 3D models(Must put light into your prefab)
4. Set the light, such as [Lightmap baking](#lightmap-baking) set the same
5. Crreat a new **LightingSettings** file by **Window**->**Rendering**->**Lighting**
6. Add **PrefabBaker** component to your prefab
7. Drag-and-drop game object to **our project** -> **prefabs** folder, let it become a prefab
8. Click **Open Baker** button to setup, more information [click here](../dev-tools/prefab-baker) to read

## Summary

Baking lights into Prefab can be done in very simple steps. After baking, we just drag and drop the Prefab into the Contents section of PackagetToolsEditor.