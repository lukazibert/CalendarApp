# Calendar App
This is a calendar app built with React that displays a monthly calendar and highlights holidays. Users can navigate between months/years and select dates.
## Features
Monthly calendar view
Switch between months and years
Select a date to quickly jump to it
Holiday dates marked with dots
Add custom holidays via holidays.txt file
## Adding Holidays
Holidays are stored in public/holidays.txt. 

Each line contains a holiday in the format:

### 2023-12-25,repeat
Date (YYYY-MM-DD)
repeat (optional) - adds dot every year

Add new lines to add more holidays. Restart app to see new holidays.

## Installation
```
git clone https://github.com/lukazibert/CalendarApp.git
```
```
cd calendar-app
```

```
npm install
```
```
npm start
```
App runs on localhost:3000