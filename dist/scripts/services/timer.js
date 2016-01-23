unmindApp.directive('timer', ['$interval', function($interval) {
    return {
        templateUrl: '/templates/directives/timer.html',
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
        
            var promise;
            
            
            var forestStormSound = new buzz.sound( "assets/sound/background/foreststorm", {
                formats: ['mp3'],
                preload: true,
                loop: true
            });
            
            var breathingGuidedSound = new buzz.sound( "assets/sound/guided/breathing-meditation", {
                formats: ['mp3'],
                preload: true
            });
            
            
            /* Starts the Timer and takes in length of timer */
            scope.startTimer = function(totalTimeInSeconds, musicSelected, guidanceSelected) {
                console.log("1 - I started");
                
                /* If they did not select a time */
                if (!totalTimeInSeconds) {
                    scope.errorMessage = "Please Choose a Time";
                    scope.iAmMeditating = false;
                    
                } else {
                    
                    // Don't start a new meditation
                    if (angular.isDefined(promise)) return;
                    
                    if (scope.iAmMeditating == true) 
                        console.log("2 - I started the timer");
                        scope.errorMessage = "";
                        scope.pauseButton();
                        /* starts a function that reduces time by 1 second every second */
                        promise = $interval(function() {
                                
                                scope.showTimer = true;
                            
                                totalTimeInSeconds--;
                                scope.timeLeft = totalTimeInSeconds;
                            
                                scope.iAmMeditating = true;
                                console.log(totalTimeInSeconds);
                            
                            }, 1000);  

                        /* Checks and plays background music */ 
                        if (musicSelected) {
                            console.log(musicSelected);
                            
                            switch(musicSelected) {
                                case "forestStorm":
                                    scope.currentBGSound = forestStormSound;
                                    scope.currentBGSound.play();
                                    break;
                                case "oceanWaves":
                                    break;
                                default:
                                    console.log('default');
                            }
                        }
                    
                        if (guidanceSelected) {
                            console.log(guidanceSelected);
                            
                            switch(guidanceSelected) {
                                case "breathingMeditation":
                                    scope.currentGuidedSound = breathingGuidedSound;
                                    scope.currentGuidedSound.play();
                                    break;
                                case "oceanWaves":
                                    break;
                                default:
                                    console.log('default');
                            }
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
                            
                                scope.iAmMeditating = true;
                                console.log(scope.timeLeft);
                            
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
                if (scope.currentBGSound) {
                    scope.currentBGSound.stop();
                }
                if (scope.currentGuidedSound !== undefined) {
                    scope.currentGuidedSound.stop();
                }
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