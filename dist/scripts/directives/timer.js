unmindApp.directive('timer', ['$interval', 'Sounds', function($interval, Sounds) {
    return {
        templateUrl: 'templates/directives/timer.html',
        replace: true,
        restrict: 'E',
        transclude:false,
        link: function(scope, element, attributes) {
        
            scope.showStartButton = true;
            scope.showPauseButton = false;
            scope.showResumeButton = false;
            scope.showTimer = false;
            scope.errorMessage = "";
            scope.iAmMeditating = false;
            scope.currentBGSound = undefined;
            scope.currentGuidedSound = undefined;
            scope.volume = 80;
            
            var guidedSoundsArray = Sounds.getGuidedSounds();
            var backgroundSoundsArray = Sounds.getBackgroundSounds();
            var promise;
            
            
            /* Starts the Timer and takes in length of timer */
            scope.startTimer = function(totalTimeInSeconds, musicSelected, guidanceSelected) {
                console.log("1 - I started");
                console.log(totalTimeInSeconds);
                
                /* If they did not select a time */
                if (!totalTimeInSeconds) {
                    scope.errorMessage = "Please Choose a Time";
                    scope.iAmMeditating = false;
                    
                } else {
                    
                    // Don't start a new meditation
                    if (angular.isDefined(promise)) return;
                    
                    if (scope.iAmMeditating == false) 
                        console.log("2 - I started the timer");
                        scope.errorMessage = "";
                        scope.pauseButton();
                        /* starts a function that reduces time by 1 second every second */
                        promise = $interval(function() {
                                
                                scope.showTimer = true;
                            
                                totalTimeInSeconds--;
                                scope.timeLeft = totalTimeInSeconds;
                                
                                scope.convertTime(totalTimeInSeconds);
                            
                                scope.iAmMeditating = true;
                                console.log(totalTimeInSeconds);
                            
                                if (totalTimeInSeconds == 0 && scope.iAmMeditating == true) {
                                    scope.resetTimer();
                                }
                            
                            }, 1000);  

                        /* Checks and plays background music */ 
                        if (musicSelected) {
                            console.log(musicSelected);
                            scope.currentBGSound = backgroundSoundsArray[musicSelected].sound;
                            scope.currentBGSound.play();
                        }

                        /* Checks and plays guidance */ 
                        if (guidanceSelected) {
                            console.log(guidanceSelected);
                            console.log(guidedSoundsArray[guidanceSelected].sound);
                            scope.currentGuidedSound = guidedSoundsArray[guidanceSelected].sound;
                            scope.currentGuidedSound.play();
                            console.log('I played guidance');
                            console.log(scope.currentGuidedSound);
                        }
                }
            };

            
            scope.resumeTimer = function() {
                console.log("3 - I started the resume");
                    // Don't start a new meditation
                    if (angular.isDefined(promise) ) return;
                        
                    if (scope.iAmMeditating == true)
                        console.log("4 - I resumed the timer");
                        scope.errorMessage = "";
                        scope.pauseButton();
                        if (scope.currentBGSound) {
                            scope.currentBGSound.play();
                        }
                        if (scope.currentGuidedSound) {
                            scope.currentGuidedSound.play();
                        }
                        
                        /* starts a function that reduces time by 1 second every second */
                        promise = $interval(function() {
                                
                                scope.showTimer = true;
                            
                                scope.timeLeft--;
                                scope.convertTime(scope.timeLeft);
                            
                                scope.iAmMeditating = true;
                                console.log(scope.timeLeft);
                                
                                if (scope.timeLeft <= 0 && scope.iAmMeditating == true) {
                                    scope.resetTimer();
                                }
                            }, 1000);  
            };
            
            scope.pauseTimer = function() {
                if ( angular.isDefined(promise)) {
                    $interval.cancel(promise);
                    promise = undefined;
                    scope.resumeButton();
                    console.log("I just paused");
                    if (scope.currentBGSound !== undefined) {
                        scope.currentBGSound.pause();
                    }
                    if (scope.currentGuidedSound !== undefined) {
                        scope.currentGuidedSound.pause();
                    }
                }
            };
            
            scope.resetTimer = function() {

                scope.timeLeft = 0;
                scope.showTimer = false;
                scope.startButton();
                scope.iAmMeditating = false;
                                
                console.log('I just reset');
                $interval.cancel(promise);
                promise = undefined;
                
                if (scope.currentBGSound) {
                    scope.currentBGSound.stop();
                    scope.currentBGSound = undefined;
                }
                if (scope.currentGuidedSound) {
                    scope.currentGuidedSound.stop();
                    scope.currentGuidedSound = undefined;
                }
            };
            
            scope.setVolume = function(volume) {
                if (scope.currentBGSound && scope.currentGuidedSound) {
                    scope.currentBGSound.setVolume(volume);
                    scope.currentGuidedSound.setVolume(volume);
                }
                scope.volume = volume;
            };
            
            
            scope.convertTime = function(secondsToConvert) {
                scope.minutes = Math.floor(secondsToConvert % 3600 / 60);
                scope.seconds = Math.floor(secondsToConvert % 3600 % 60);
                
                if (scope.minutes < 10) {scope.minutes = "0"+scope.minutes;}
                if (scope.seconds < 10) {scope.seconds = "0"+scope.seconds;}
             
            };
            
            /* ------- BUTTONS ---------*/ 
            scope.startButton = function() {
                scope.showPauseButton = false;
                scope.showStartButton = true;
                scope.showResumeButton = false;
            };
            
            scope.pauseButton = function() {
                scope.showStartButton = false;
                scope.showPauseButton = true;
                scope.showResumeButton = false;
            };
            
            scope.resumeButton = function() {
                scope.showResumeButton = true;
                scope.showStartButton = false;
                scope.showPauseButton = false;
            };
        }
    };

}]);