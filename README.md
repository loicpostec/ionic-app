# Interesthing app

![Accueil](screenshots/accueil.png)

## Description

Interesthing is a mobile app implemented with [Angular][angular] on [Ionic][ionic]. It has been developped during the DevMob course at HEIG-VD given by [Mathias Oberson][mathias]. The app is kind of a new Google Maps based on users' favorites. The goal of the app is to show numerous points of interest in every town of Switzerland (or the world) such as graffiti (art), funny places, WTF?! elements, beautiful spots or even shortcuts.

The app is linked to [Interesthing API][api] (API REST) developped during ArchiOWeb course given by [Simon Oulevay][simon].

## Requirements

* [Node.js][node] 12.x

## Usage

To run the application locally on your browser, you can run the following command line. 

```bash
git clone https://github.com/interesthing/ionic-app.git
cd ionic-app
npm install
ionic serve
```

To deploy the application on your phone, you can use Ionic built in tools. See [Ionic documentation][ionic_dev] about testing and deploying the app. On Android, deploying the application should be as simple as this command line (given that you have Android Studio installed and configured):

```bash
ionic cordova run android
```

## What can you do with the app ?

* **log in** to the app or **create** an account
* **post** some points of interest (POI) with an image
* **see** all of the points of interest (POI) on a map (around me)
* **see** the details of a specific point of interest (POI) and rates this POI
* **filter** the points of interest (POI) by categories and average ratings
* **rate** the other points of interest (POI)
* **see** the insights in real-time on the home page

### Create an account
<img src="screenshots/register.png" width="300"/>

If you don't have an account you have to create one. 

### Log in
<img src="screenshots/login.png" width="300"/>

Now you've an account, you can simply log in.  

### Home Page
<img src="screenshots/home.png" width="300"/>

Websocket is implemented for the real-time component. Insights are refreshed on every post or delete actions for ratings, POIs & users.

You can also apply filters directly. 
You can see the POIs around you.
The search bar is not implemented yet.
You can also see a top ten of the best POIs. 

### POI page
<img src="screenshots/poi.png" width="300"/>

You can see the details from a single POI (image, localisation on a map, description), rates for this POI and see all of the ratings of the POI. 

### Post a POI
<img src="screenshots/add-poi.png" width="300"/>

You can post a POI. You have to be geolocalised to post a POI.

### User Page
<img src="screenshots/profile.png" width="300"/>

On the user page you can log out. 
You can update your posted POIs.
You can see all of your ratings. 

### See POI around me
<img src="screenshots/map.png" width="300"/>

On the map section you can see the POIs around you and if you're not geolocalised, POIs that are in Switzerland globally. 

### Filter by categories

<img src="screenshots/filters.png" width="300"/>

You can filter the POIs by categories or by average ratings. 


[ionic]: https://ionicframework.com/docs
[ionic_dev]: https://ionicframework.com/docs/v1/guide/testing.html
[angular]: https://angular.io/docs
[node]: https://nodejs.org/
[api]: https://interesthing.herokuapp.com/
[mathias]: https://github.com/Tazaf
[simon]: https://github.com/AlphaHydrae
