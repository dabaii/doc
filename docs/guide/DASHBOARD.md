# DASHBOARD
  
## Introduction
  
Welcome to Particle Network's dashboard!
  
---
  
**Particle Dashboard** is an all-encompassing control platform that provides management and analysis services for Web3.0 projects using Particle Network. After creating their project on the dashboard, projects will receive their Project ID, Client Key, and Server Key. They can then use these elements to employ Particle Network's SDKs and other services.
  
Here, we'll provide you with a step-by-step guide on the Particle Dashboard.
  
---
  
####   Getting Started
  
  
  
  
Log in to the dashboard with your **email.** After you enter the **verification code**, you'll have access to the homepage.
  
![图片](https://1871216767-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FF6uqWeUD7kwCZqSpBtVz%2Fuploads%2Fgit-blob-852f849dfcde56303b735eda66a08588a466fc61%2Fdenglu%20.jpg?alt=media )
  
Once you enter the Particle Dashboard, you'll have access to the following features:
  
#####    👉 Manage Projects
  
  
  
  
#####    👉 Manage Apps
  
  
  
  
---
  
## Manage Projects
  
---
  
#### The Relationship Between Projects and Apps
  
  
  
![图片](https://1871216767-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FF6uqWeUD7kwCZqSpBtVz%2Fuploads%2Fgit-blob-ff5ae55474823d3d584d8e46ca05a516ac81ecbc%2F%E5%9B%BE1.jpg?alt=media )
  
  
####    Create Project
  
  
  
  
If you are new, Particle Network will automatically create a new project for you. You can click into **"First Project"** from the homepage to access the project overview.
  
If you want to create a new project, click on the **"Create"** button on the project creation page. Alternatively, you can select **"Add New Project"** when you view your **"All Projects"** list.
  
![图片](https://1871216767-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FF6uqWeUD7kwCZqSpBtVz%2Fuploads%2Fgit-blob-d8242406fbe8ef491b6a06bf293c10b06e7200ee%2F%E7%94%BB%E6%9D%BF%201.jpg?alt=media )
  
There is no need to specify your project's blockchain when you create a new project. This will all be specified once you use the SDK.
  
Once the project has been created successfully, you will receive an auto-generated Client Key, which acts as the project's unique identifier in Particle Dashboard. You will need to use this when initializing the Particle SDK in your app. Make sure you copy the Client Key correctly into your initial code.
  
After creating the project, you may subsequently add apps to it.
  
  
####    Edit Project
  
  
  
  
After entering the project overview page, select "Edit" to edit the basic information of your project.
  
Currently, editable items include:
* Project name
* Delete project (once the project has been deleted, it cannot be retrieved—please proceed with caution)
  
  
---
  
  
## Manage Apps
  
After the project has been successfully created, you can add apps to it.
Here, we'll detail the process of adding apps to your project.
  
---
  
#### Adding an Android App
  
  
  
  
1. Select the project you'd like to add an app to and enter its project overview page
2. Select **"Add Android App"**
3. Input relevant information to the Android app
   * App name: this is only displayed within the dashboard, used to distinguish between different apps for easy management.
   * Package Name: often referred to as an application ID, it uniquely identifies your app on the device and in the Google Play Store. Find your app's **package name** in your module (app-level) Gradle file, usually app/build.gradle (e.g. com.yourcompany.yourproject). The package name value is case-sensitive.
   * Save your app information
  
####    Adding an iOS App
  
  
  
  
1. Select the project you'd like to add an app to and enter its project overview page
2. Select **"Add iOS App"**
3. Input relevant information to the **iOS app**
   * App Name: this is only displayed within the dashboard, used to distinguish between different apps for easy management.
   * Apple Bundle ID: this uniquely identifies an app in Apple's ecosystem. Open your project in Xcode, select the top-level app in the project navigator, then select the **General** tab. The value of the **Bundle Identifier** is the **Bundle ID** (e.g. com.yourcompany.yourproject). The Bundle ID value is case-sensitive.
   * ave your app information
  
####    Adding a Web App
  
  
  
  
1. Select the project you'd like to add an app to and enter its project overview page
2. Select **"Add Web App"**
3. Input relevant information to the Web app
   * App Name: this is only displayed within the dashboard, used to distinguish between different apps for easy management
   * Web Domain: your web app's domain (e.g. app.particle.network).
4. Save your app information
  
Deleting an app in a project is not currently supported.