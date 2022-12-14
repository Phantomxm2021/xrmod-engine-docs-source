---
sidebar_position: 6
title: UDM System
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,XR,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: UDM is a customization system, which allows users to customize XR content and replace parts, etc. 
---
## What is UDM System?

UDM is a customization system that allows users to assemble their own products through XR. This feature does not require you to write a single line of code, just upload a 3D model from the console or use the public repository to create an XR experience.

<coverimg  url={require('@site/static/static/dev-tools/udmsystem/hololen_udm.jpg')} height="100%" padding="0.5rem"/>

## UDM projects

You must read the [XRMOD Cloud](./dashboard) manual before you start. Now let's start creating our first UDM project via the XRMOD Cloud console.

1. Register an XRMOD Cloud account and verify it.
<coverimg  url={require('@site/static/static/dev-tools/cmsdashboard/dashboard_en.jpg')} height="100%" padding="0.5rem"/>

2. Sign in and create your first app
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/create_first_app.jpg')} height="100%" padding="0.5rem"/>

3. Click on the app in the list of apps (i.e. the one you just created) to enter it.
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/inside_the_app.jpg')} height="100%" padding="0.5rem"/>

4. Click the **Create project** button or right-top menu to create our first XR-Project. You will see the following screen, at this moment we have to select the UDM category to create. 
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/create_udm_project_1.jpg')} height="100%" padding="0.5rem"/>
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/create_udm_project_2.jpg')} height="100%" padding="0.5rem"/>
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/create_udm_project_3.jpg')} height="100%" padding="0.5rem"/>
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/create_udm_project_4.jpg')} height="100%" padding="0.5rem"/>
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/udm_project_detail.jpg')} height="100%" padding="0.5rem"/>

5. Now our UDM project has been created. But it is not yet ready for use and needs further setup. In the first place, we need click on the **XR Editor** tab item to enter the XRMOD Cloud Editor.
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/udm_further_setip.jpg')} height="100%" padding="0.5rem"/>
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/empty_project.jpg')} height="100%" padding="0.5rem"/>

6. A newly created UDM project will prompt you to upload your own 3D model since it is not initially set up with a 3D model. Of course we also consider that creators may not have 3D models, so we provide over a million 3D models for you to use. If you use the public library model, here you click **Cancel** to go to the Editor home page.
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/empty_project.jpg')} height="100%" padding="0.5rem"/>

7. Open our Resources panel via the **Library** menu bar at the top of the Editor. The default opening panel selects your private 3D model page, you can click Private and Public to switch between them.
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/open_library.jpg')} height="100%" padding="0.5rem"/>
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/library.jpg')} height="100%" padding="0.5rem"/>

8. Find a 3D model you like and add it to the Editor for further editing with a right mouse click.
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/download_finished.jpg')} height="100%" padding="0.5rem"/>

9. Next we need to set an enclosing box for the object in order to tell XR the size of our 3D model.
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/bound_object_1.jpg')} height="100%" padding="0.5rem"/>
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/bound_object_2.jpg')} height="100%" padding="0.5rem"/>

10. Since the size of 1 unit in XR is 1 meter in reality, if the 3D model is too large it does not meet the actual requirements, while each small square in the scene is one meter, so we also need to adjust the scaling of the model.
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/resize_object.jpg')} height="100%" padding="0.5rem"/>

11. After everything is edited we need to save the project, otherwise the data will not be stored.
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/save_project.jpg')} height="100%" padding="0.5rem"/>
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/saved.jpg')} height="100%" padding="0.5rem"/>

## Review in App

Go to your XR project and set its status to **Publish** (check the Publish box), then save your project via right top menu.

<coverimg  url={require('@site/static/static/dev-tools/cmsdashboard/project_state.jpg')} height="100%" padding="0.5rem"/>
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/online_project.jpg')} height="100%" padding="0.5rem"/>


If you don't have your own XR app yet, you can scan the QR code to download the ARMOD app to see your XR experience.

<coverimg  url={require('@site/static/static/dev-tools/cmsdashboard/ARMODApp.png')} height="100%" padding="0.5rem"/>

Ok. If you use our ARMOD APP, you can turn on the share of your project; this will allow you to see your XR experience in the ARMOD App community page. If you do not want to turn on sharing, you can also enter your XR-Experience Id on the third page of the ARMOD APP to experience it.
