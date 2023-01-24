var animals = [
    {
        type: 'Omnivores Animals',
        imgSrc: "./image/photo1.jpg"
    },
    {
        type: 'Omnivores Animals',
        imgSrc: "./image/photo2.jpg"
    },
    {
        type: 'Omnivores Animals',
        imgSrc: "./image/photo3.jpg"
    },
    {
        type: 'Omnivores Animals',
        imgSrc: "./image/photo4.jpg"
    },
    {
        type: 'Omnivores Animals',
        imgSrc: "./image/photo5.jpg"
    },
    {
        type: 'Omnivores Animals',
        imgSrc: "./image/photo6.jpg"
    },
    {
        type: 'Omnivores Animals',
        imgSrc: "./image/photo7.jpg"
    },
    {
        type: 'Omnivores Animals',
        imgSrc: "./image/photo8.jpg"
    },
    {
        type: 'Omnivores Animals',
        imgSrc: "./image/photo9.jpg"
    },
    {
        type: 'Carnivores Animals',
        imgSrc: "./image/imag1.jpg"
    },
    {
        type: 'Carnivores Animals',
        imgSrc: "./image/imag2.jpg"
    },
    {
        type: 'Carnivores Animals',
        imgSrc: "./image/imag3.jpg"
    },
    {
        type: 'Carnivores Animals',
        imgSrc: "./image/imag4.jpg"
    },
    {
        type: 'Carnivores Animals',
        imgSrc: "./image/imag5.jpg"
    },
    {
        type: 'Carnivores Animals',
        imgSrc: "./image/imag6.jpg"
    },
    {
        type: 'Carnivores Animals',
        imgSrc: "./image/imag7.jpg"
    },
    {
        type: 'Carnivores Animals',
        imgSrc: "./image/imag8.jpg"
    },
    {
        type: 'Carnivores Animals',
        imgSrc: "./image/imag9.jpg"
    },
    {
        type: 'Herbivorous Animals',
        imgSrc: "./image/h1.jpg"
    },
    {
        type: 'Herbivorous Animals',
        imgSrc: "./image/h2.jpg"
    },
    {
        type: 'Herbivorous Animals',
        imgSrc: "./image/h3.jpg"
    },
    {
        type: 'Herbivorous Animals',
        imgSrc: "./image/h4.jpg"
    },
    {
        type: 'Herbivorous Animals',
        imgSrc: "./image/h5.jpg"
    },
    {
        type: 'Herbivorous Animals',
        imgSrc: "./image/h6.jpg"
    },
    {
        type: 'Herbivorous Animals',
        imgSrc: "./image/h7.jpg"
    },
    {
        type: 'Herbivorous Animals',
        imgSrc: "./image/h8.jpg"
    },
    {
        type: 'Herbivorous Animals',
        imgSrc: "./image/h9.jpg"
    }
]


var sounds = [
    {type:'Omnivores Animals',
sound:"./sounds/djeja.mp3"}, 
    {type:'Omnivores Animals',
sound:"./sounds/el far.mp3"}, 
     {type:'Omnivores Animals',
sound:"./sounds/panda.mp3"}, 
    {type:'Omnivores Animals',
sound:"./sounds/batri9.mp3"}, 
    {type:'Omnivores Animals',
sound:"./sounds/9anfoud.mp3"}, 
{type:'Omnivores Animals',
sound:"./sounds/9ared.mp3"}, 
    {type:'Omnivores Animals',
sound:"./sounds/dob.mp3"}, 
    
    {type:'Omnivores Animals',
sound:"./sounds/bat.mp3"}, 
    {type:'Omnivores Animals',
sound:"./sounds/el khenzir.mp3"},
    {type:'Carnivores Animals',
sound:"./sounds/asad.mp3"}, 
    {type:'Carnivores Animals',
sound:"./sounds/fahed.mp3"}, 
   {type:'Carnivores Animals',
sound:"./sounds/fil.mp3"}, 
    {type:'Carnivores Animals',
sound:"./sounds/dhib.wav"}, 
    {type:'Carnivores Animals',
sound:"./sounds/kaleb.mp3"}, 
    {type:'Carnivores Animals',
sound:"./sounds/9et.wav"}, 
    {type:'Carnivores Animals',
sound:"./sounds/neser.mp3"}, 
    {type:'Carnivores Animals',
sound:"./sounds/tha3leb.mp3"}, 
   {type:'Carnivores Animals',
sound:"./sounds/karkadan.mp3"},
              {type:'Herbivorous Animals',
sound:"./sounds/7asan.mp3"},
    {type:'Herbivorous Animals',
sound:"./sounds/bagra.mp3"},
    {type:'Herbivorous Animals',
sound:"./sounds/kharouf.mp3"},
    {type:'Herbivorous Animals',
sound:"./sounds/7imar wa7chi.mp3"},
    {type:'Herbivorous Animals',
sound:"./sounds/gazla.mp3"},
    {type:'Herbivorous Animals',
sound:"./sounds/thawer.mp3"},
    {type:'Herbivorous Animals',
sound:"./sounds/koala.mp3"},
    {type:'Herbivorous Animals',
sound:"./sounds/arneb.mp3"},
    {type:'Herbivorous Animals',
sound:"./sounds/zarafa.mp3"}]







var each = function (coll, func) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            func(coll[i], i)
        }
    }
    else {
        for (var key in coll) {
            func(coll[key], key)
        }
    }
}

var filter = function (array, predicate) {
    var acc = [];
    each(array, function (e, i) {
        if (predicate(e, i)) {
            acc.push(e)
        }
    })
    return acc;
}





function sound(i) {
    arr[i].play()
}

$(".searchButton").on("click", function (e) {
    var filtredData = filter(animals, function (e, i) {
        return e.type.toLowerCase() === $(".searchTerm").val().toLowerCase()
    })

    var filtredSound = filter(sounds, function (e, i) {
        return e.type.toLowerCase() === $(".searchTerm").val().toLowerCase()
    })

    $("#container").empty()
    
    each(filtredData, function (elem, i) {
        console.log (filtredSound[i].sound)
        $("#container").append('<div id="l' + i + '"onclick="sound(' + i + ')" class="grid-item"><img id="imag' + i + '" src="' + elem.imgSrc + '"/></div><audio controls="" class="audio"><source src="' + filtredSound[i].sound+ '" type="audio/mpeg"> </audio> ')
    })
})
