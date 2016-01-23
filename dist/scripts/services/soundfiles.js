 (function() {
    function Sounds() {
        var soundFiles = {};
         
        var albumPicasso = {
            name: 'The Colors',
            artist: 'Pablo Picasso',
            label: 'Cubism',
            year: '1881',
            albumArtUrl: '/assets/images/album_covers/01.png',
            songs: [
                { name: 'Blue', length: '161.71', audioUrl: '/assets/music/blue' },
                { name: 'Green', length: '103.96', audioUrl: '/assets/music/green' },
                { name: 'Red', length: '268.45', audioUrl: '/assets/music/red' },
                { name: 'Pink', length: '153.14', audioUrl: '/assets/music/pink' },
                { name: 'Magenta', length: '374.22', audioUrl: '/assets/music/magenta' }
             ]
    };
 
//        Sounds.getAlbum = function() {
//            return albumPicasso;
//        };
        
        Sounds.getAll = function(numberOfAlbums) {
            var albums = []
            for (var i = 0; i < numberOfAlbums; i++) {
                albums.push(albumPicasso);
            }
            return albums;
            
        };
        
        return Sounds;
    }
 
     angular
         .module('unmindApp')
         .factory('Sounds', Sounds);
 })();