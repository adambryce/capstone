 (function() {
    function Sounds() {
        var Sounds = {};

    /* --- GUIDED SOUND FILES --- */

        var afternoonJungleSoundObj = {
        sound:  new buzz.sound( "./assets/sound/background/afternoon-jungle", {
                formats: ['mp3'],
                preload: false,
                loop: true
            }), 
        name: 'Afternoon Jungle'
        };

        var almondBlossomSoundObj = {
            sound:  new buzz.sound( "./assets/sound/background/almond-blossom", {
                    formats: ['mp3'],
                    preload: false,
                    loop: true
            }), 
            name:'Almond Blossom'
        };

        var blueCoastSoundObj = {
            sound:  new buzz.sound( "./assets/sound/background/blue-coast", {
                    formats: ['mp3'],
                    preload: false,
                    loop: true
                }),
            name:'Blue Coast'
        };

        var forestStormSoundObj = {
            sound:  new buzz.sound( "./assets/sound/background/foreststorm", {
                    formats: ['mp3'],
                    preload: false,
                    loop: true
                }),
            name:'Forest Storm'
        };

        var healingSoundObj = {
            sound:  new buzz.sound( "assets/sound/background/healing", {
                    formats: ['mp3'],
                    preload: false,
                    loop: true
                }),
            name:'Healing'
        };

        var morningSunSoundObj = {
            sound:  new buzz.sound( "./assets/sound/background/morning-sun", {
                    formats: ['mp3'],
                    preload: false,
                    loop: true
                }),
            name: 'Morning Sun'
        };

        var oceanWavesSoundObj = {
            sound:  new buzz.sound( "assets/sound/background/ocean-waves", {
                    formats: ['mp3'],
                    preload: false,
                    loop: true
                }), 
            name: 'Ocean Waves'
        };

        var summerAmbientSoundObj = {
            sound:  new buzz.sound( "./assets/sound/background/summer-ambient", {
                    formats: ['mp3'],
                    preload: false,
                    loop: true
                }), 
            name:'Ambient Summer'
        };


    /*  --- GUIDED SOUND FILES --- */

        var awakenAbundanceSoundObj = {
            sound:  new buzz.sound( "./assets/sound/guided/awaken-abundance", {
                    formats: ['mp3'],
                    preload: false
            }),
            name:'Awaken Abundance'
        };

        var awakenCreativitySoundObj = {
            sound:  new buzz.sound( "./assets/sound/guided/awaken-creativity", {
                    formats: ['mp3'],
                    preload: false
                }),
            name:'Awaken Creativity'
        };

        var awakenWanderlustSoundObj = {
            sound:  new buzz.sound( "./assets/sound/guided/awaken-wanderlust", {
                    formats: ['mp3'],
                    preload: false
                }), 
            name: 'Awaken Wanderlust'
        };

        var dreamMeditationSoundObj = {
            sound:  new buzz.sound( "./assets/sound/guided/dream-meditation", {
                    formats: ['mp3'],
                    preload: false
                }),
            name: 'Dream Meditation'
        };

        var gratitudeSoundObj = {
            sound:  new buzz.sound( "./assets/sound/guided/gratitude", {
                    formats: ['mp3'],
                    preload: false
                }),
            name:'Gratitude'
        };

        
        var heartOfCreationSoundObj = {
            sound:  new buzz.sound( "./assets/sound/guided/heart-of-creation", {
                    formats: ['mp3'],
                    preload: false
            }),
            name: 'Heart of Creation'
        };

        
        var releaseStressSoundObj = {
            sound:  new buzz.sound( "./assets/sound/guided/release-stress", {
                    formats: ['mp3'],
                    preload: false
                }),
            name: 'Release Stress'
        };
        
        var journeyIntoHealingSoundObj = {
            sound:  new buzz.sound( "./assets/sound/guided/journey-into-healing", {
                    formats: ['mp3'],
                    preload: false
                }),
            name:'Journey Into Healing'
        };
        
        /*  --- Functions that return the sounds arrays --- */
        
        Sounds.getGuidedSounds = function() {
            var myGuidedSoundsArray = [awakenAbundanceSoundObj, journeyIntoHealingSoundObj, releaseStressSoundObj, gratitudeSoundObj, awakenCreativitySoundObj, heartOfCreationSoundObj, dreamMeditationSoundObj, awakenWanderlustSoundObj];
            return myGuidedSoundsArray;
        }
        
        Sounds.getBackgroundSounds = function() {
            var myBackgroundSoundsArray = [blueCoastSoundObj, afternoonJungleSoundObj, almondBlossomSoundObj, summerAmbientSoundObj, forestStormSoundObj, healingSoundObj, morningSunSoundObj, oceanWavesSoundObj];
            return myBackgroundSoundsArray;
        }

        return Sounds;
    }

     
     angular
         .module('unmindApp')
         .factory('Sounds', Sounds);
 })();
